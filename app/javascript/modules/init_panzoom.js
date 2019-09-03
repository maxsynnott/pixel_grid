import panzoom from "panzoom";

const initPanzoom = () => {
  const navbar = document.querySelector(".navbar")
  const initialZoom = (window.innerHeight - navbar.offsetHeight) * 0.9 / canvas.height;

  const instance = panzoom(stage).zoomAbs(
   ((window.innerWidth / 2 - (canvas.width * initialZoom) / 2) * -1) / (initialZoom - 1), // x offset
   (((window.innerHeight - navbar.offsetHeight) / 2 - (canvas.height * initialZoom) / 2) * -1) / (initialZoom - 1), // y offset
   initialZoom);

  canvas.style.display = "block";
};

export { initPanzoom };
