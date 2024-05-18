export const unload3kit = () => {
  const existingScript = document.getElementById("threekit");
  if (existingScript) {
    existingScript.remove();
  }

  var playerElement = document.querySelectorAll("player");
  if(playerElement.length > 1) {
    playerElement.forEach((div, idx) => {
      if(idx > 0) {
        div.remove();
      }
    })
  }
  // if (playerElement) {
  //   // var threekitDivs = playerElement.querySelectorAll("div.threekit");
  //   //
  //   // threekitDivs.forEach(function (div) {
  //   //   div.remove();
  //   // });
  //
  // } else {
  //   console.log("Element with id "player" not found.");
  // }
};