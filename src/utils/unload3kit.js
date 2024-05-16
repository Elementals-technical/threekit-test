export const unload3kit = () => {
  const existingScript = document.getElementById("threekit");
  if (existingScript) {
    existingScript.remove();
  }

  var playerElement = document.getElementById("player");

  if (playerElement) {
    var threekitDivs = playerElement.querySelectorAll("div.threekit");

    threekitDivs.forEach(function (div) {
      div.remove();
    });
  } else {
    console.log("Element with id “player” not found.");
  }
};
