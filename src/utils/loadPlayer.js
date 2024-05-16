export const playerUrl =
  "https://preview.threekit.com/app/js/threekit-player.js";

export const apiBaseUrl = "https://lv-vivatech-vector.3kit.com/api";

export const authToken = "e433afa6-8404-4146-b70c-9692002765df";

export function loadPlayer() {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = playerUrl;

    script.onload = () => resolve();
    script.onerror = (error) =>
      reject(new Error(`Script load error: ${error.message}`));

    document.body.append(script);
  });
}
