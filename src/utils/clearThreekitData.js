export const clearThreekitData = () => {
  // this.player = null;
  // this.configurator = null;
  // this.apiT = null;
  // this.dataDrivenConfiguratorExtension = null;

  [
    "threekitconf",
    "threekitAR",
    "threekitPlayer",
    "setImmediate",
    "clearImmediate",
    "threekit",
    "TKDataDrivenConfiguratorToolData",
    "configurator",
    "dataDrivenConfiguratorExtension",
    "headerIndex",
    "dataDrivenConfigurator",
    "configurationObject",
  ].map((key) => {
    //@ts-ignore
    window[key] = undefined;
  });
};
