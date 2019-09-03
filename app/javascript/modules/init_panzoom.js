import panzoom from "panzoom";

const initPanzoom = () => {
  const navbar = document.querySelector(".navbar")
  const stage = document.getElementById("stage")
  const initialZoom = (window.innerHeight - navbar.offsetHeight) * 0.9 / canvas.height;

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
      canvas.style.boxShadow = "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)"
    }
  });

  // Displays canvas once everything has been set
  canvas.style.display = "block";
};

export { initPanzoom };
