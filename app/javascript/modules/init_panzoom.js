import panzoom from "panzoom";

const initPanzoom = () => {
  const navbar = document.querySelector(".navbar")
  const stage = document.getElementById("stage")
  let initialZoom = (window.innerHeight - navbar.offsetHeight) * 0.9 / canvas.height;
  if ((initialZoom * canvas.width) > (window.innerWidth * 0.9)) {
    initialZoom = window.innerWidth * 0.9 / canvas.width
  }

  // Applies panzoom to the stage
  const controller = panzoom(stage, {zoomDoubleClickSpeed: 1, maxZoom: 150, minZoom: initialZoom / 2})

  // Sets intial position and zoom (don't touch this)
  controller.zoomAbs(
   ((window.innerWidth / 2 - (canvas.width * initialZoom) / 2) * -1) / (initialZoom - 1), // x offset
   (((window.innerHeight - navbar.offsetHeight) / 2 - (canvas.height * initialZoom) / 2) * -1) / (initialZoom - 1), // y offset
   initialZoom);

  // Disables/enables canvas box shadow depending on zoom level
  const regex = /[\.|\d]+/;
  controller.on('zoom', function(e) {
    const zoom = parseInt(stage.style.transform.match(regex), 10);
    if (zoom >= 30) {
      canvas.style.boxShadow = "";
    } else if (zoom < 30) {
      canvas.style.boxShadow = `0 ${canvas.height / 75}px ${canvas.height / 50}px rgba(0,0,0,0.30)`
    }
  });

  // Displays canvas once everything has been set
  canvas.style.display = "block";
};

export { initPanzoom };
