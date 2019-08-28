import panzoom from "panzoom";

function initStage() {
    var theStage = document.querySelector('#stage');

    panzoom(theStage, { maxZoom: 75, minZoom: 0.6, zoomSpeed: 0.035 }).zoomAbs(
        Math.floor(window.innerWidth * 1.8), // initial x position
        100, // initial y position
        0.85 // initial zoom
    );
};

export { initStage };
