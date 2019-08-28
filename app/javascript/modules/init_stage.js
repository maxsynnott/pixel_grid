import panzoom from "panzoom";

function initStage() {
    var theStage = document.querySelector('#stage');

    panzoom(theStage, { maxZoom: 9, minZoom: 0.6, zoomSpeed: 0.035 }).zoomAbs(
        3500, // initial x position
        100, // initial y position
        0.85 // initial zoom
    );
};
export { initStage };
