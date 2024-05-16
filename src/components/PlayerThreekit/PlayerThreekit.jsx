// import { PropsWithChildren, memo, useEffect, useState } from "react";
// import { getIsLoadingThreekit, setThreekitLoading } from "~entities/tasks";
// import { useAppDispatch, useAppSelector } from "~shared/lib/store";
// import { init3kit, load3kit, unload3kit } from "~shared/lib/threekit";
// import { LoaderVivid } from "~shared/ui/Loader";

import { useEffect } from "react";
import { authToken, loadPlayer } from "../../utils/loadPlayer";
import { unload3kit } from "../../utils/unload3kit";
import { clearThreekitData } from "../../utils/clearThreekitData";
// import { load3kit, unload3kit } from "../../utils/loadThreekit";
// import { init3kit } from "../../utils/init3kit";
import s from "./PlayerThreekit.module.scss";
// import { useStoreDispatch } from "../..";
// import {
//   setDataExtentionalLoadingThreekitLoading,
//   setThreekitLoading,
// } from "../../store/slices/configurator/Configurator.sclice";
// import { getThreekitLoading } from "../../store/slices/configurator/selectors/selectors";
// import { loadPlayer } from "../../utils/speechAIApi";
// import { authToken } from "../../utils/constansAPIAI";

// interface ResourceThreekitProviderPropsI {
//   assetId: string;
//   children?: any;
//   initialConfiguration?: any;
//   isVisiblePlayerStyle?: boolean;
// }

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function UI_waitForGlobalVar(callback) {
  while (
    !window.dataDrivenConfiguratorExtension ||
    !window.dataDrivenConfiguratorExtension.isInited
  ) {
    await sleep(1);
  }
  callback();
}
export const PlayerThreekit = (props) => {
  const { assetId } = props;

  useEffect(() => {
     //@ts-ignore
     window.dataDrivenConfiguratorExtension = undefined;
     window.dataDrivenConfigurator = undefined;
     //@ts-ignore
     window.threekit = undefined;
     unload3kit();
     clearThreekitData();
     
    const loadThreekit = async () => {
      const THREEKIT_PARAMS = {
        threekitUrl: "https://preview.threekit.com/",
        authToken: authToken,
        orgId: "c80d2933-07f3-4d90-96ca-af36ec8b3f93",
        assetId,
      };

      if (!window.threekitPlayer) {
        await loadPlayer();
      }
      // @ts-ignore

      console.log({
        authToken: THREEKIT_PARAMS["authToken"],
        el: document.getElementById("player"),
        assetId: assetId,
        display: "image",
      });

      // @ts-ignore
      const player = await window.threekitPlayer({
        authToken: THREEKIT_PARAMS["authToken"],
        el: document.getElementById("player"),
        assetId: assetId,
        display: "image",
      });

      // @ts-ignore
      window.threekit = {};
      // @ts-ignore
      window.threekit.player = player;
      await player.getConfigurator().then((playerConfig) => {
        window.threekit.configurator = playerConfig;
        // @ts-ignore
        return window.threekit.configurator.prefetchAttributes([
          "Rotate Model",
        ]);
      });
      // @ts-ignore
      await UI_waitForGlobalVar(async () => {});
    };

    loadThreekit();
    return () => {
      //@ts-ignore
      window.dataDrivenConfiguratorExtension = undefined;
      window.dataDrivenConfigurator = undefined;
      //@ts-ignore
      window.threekit = undefined;
      unload3kit();
      clearThreekitData();
    };
  }, [assetId]);

  return (
    <>
      <div
        // style={{ visibility: isVisiblePlayerStyle ? "visible" : "hidden" }}
        className={s.threkitPlayerWrap}
        id="player"
      />
    </>
  );
};
