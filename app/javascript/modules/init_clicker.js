function initClicker() {
  let cols = document.querySelector(".cols-container");
  let canvas = document.getElementById('grid');
  let ctx = canvas.getContext('2d');

  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  const rgbas = { 0: [255, 255, 255, 1],
                 1: [87, 87, 87, 1],
                 2: [173, 35, 35, 1],
                 3: [42, 75, 215, 1],
                 4: [29, 105, 20, 1],
                 5: [129, 74, 25, 1],
                 6: [129, 38, 192, 1],
                 7: [160, 160, 160, 1],
                 8: [129, 197, 122, 1],
                 9: [157, 175, 255, 1],
                 10: [41, 208, 208, 1],
                 11: [255, 146, 51, 1],
                 12: [255, 238, 51, 1],
                 13: [233, 222, 187, 1],
                 14: [255, 205, 243, 1],
                 15: [0, 0, 0, 1] }

  let colour = "black";

  for (let i = 0; i < cols.children.length; i++) {
    cols.children[i].addEventListener('click', (event) => { colour = getComputedStyle(event.currentTarget).backgroundColor })
    }

  // On each mousedown we get the css transform property of the canvas and divide
  // the perceived coordinates by the zoom amount to get pixel accurate position.
  canvas.addEventListener('mousedown', function(evt) {
    var a = stage.style.transform;
    var b = a.substring(7);
    var c = b.slice(0, -1);
    var d = c.split(',');
    var mousePos = getMousePos(canvas, evt);
    var coordsX = Math.floor(mousePos.x / d[0]);
    var coordsY = Math.floor(mousePos.y / d[0]);
    console.log("X: " + coordsX + "\n" + "Y: " + coordsY + "\n");
    // Outputs a 1x1 pixel on the screen where you click based on coords.
    console.log(colour);
    ctx.fillStyle = colour;
    ctx.fillRect(coordsX, coordsY, 1, 1);


  }, false);
}

export { initClicker };
