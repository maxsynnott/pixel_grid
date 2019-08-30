import panzoom from "panzoom";

function initStage() {
  let grid = document.querySelector('#grid');
  let zoom = (window.innerHeight - 66) * 0.9 / grid.height;
panzoom(grid, { maxZoom: 75, minZoom: 0.6, zoomSpeed: 0.035 }).zoomAbs(
  0, // initial x position
  100, // initial y position
  zoom // initial zoom
   );
};
//canvas.width * 2
//window.innerHeight * zoom

export { initStage };

//((viewHeight - 66px) * 0.9 ) / canv height.
