import panzoom from "panzoom";

function initStage() {
  let zoom = (window.innerHeight - 66) * 0.9 / canvas.height;
panzoom(canvas, { maxZoom: 75, minZoom: 0.6, zoomSpeed: 0.035 }).zoomAbs(
  (canvas.width * zoom) / 2, // initial x position
  (canvas.height * zoom) / 3, // initial y position CHANGE THIS!!!!!!!!!!!! TAKE INTO ACCOUNT NAVBAR HEIGHT
  zoom // initial zoom
   );
};
//canvas.width * 2
//window.innerHeight * zoom

export { initStage };

//((viewHeight - 66px) * 0.9 ) / canv height.
