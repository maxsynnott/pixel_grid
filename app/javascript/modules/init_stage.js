import panzoom from "panzoom";

function initStage() {
  const navbar = document.querySelector(".navbar");
  // Later need to change zoom formula to adapt to very wide grids
  let initialZoom = (window.innerHeight - navbar.offsetHeight) * 0.9 / canvas.height;
  // Nice and simple to keep it high on the screen, could change this later
  canvas.style.top = `${navbar.offsetHeight / 2}px`
  // Pretty sure this is right
  canvas.style.left = `${((window.innerWidth / 2) - (canvas.width / 2 * initialZoom))}px`;
  panzoom(canvas, { maxZoom: 75, minZoom: 0.6, zoomSpeed: 0.035 }).zoomAbs(
    0,
    0,
    initialZoom
    );
  canvas.style.display = "block";
};

export { initStage };
