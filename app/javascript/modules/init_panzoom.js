import panzoom from "panzoom";

const initPanzoom = () => {
  const navbar = document.querySelector(".navbar")
  const initialZoom = (window.innerHeight - navbar.offsetHeight) * 0.9 / canvas.height;

  const instance = panzoom(stage).zoomAbs(
    0,
    0,
    initialZoom);

  canvas.style.top = `${(window.innerHeight - navbar.offsetHeight) / 2 / (initialZoom * (1 + navbar.offsetHeight / window.innerHeight)) - canvas.height / 2}px`
  canvas.style.left = `${window.innerWidth / 2 / initialZoom - canvas.width / 2}px`

  canvas.style.display = "block";
};

export { initPanzoom };
