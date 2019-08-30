function initClicker() {
  // Get color grid, canvas, store as variables and add context for canvas writes.
  let cols = document.querySelector(".cols-container");
  let canvas = document.getElementById('grid');
  let ctx = canvas.getContext('2d');
  //class="speen"

  // getting the mouse coordinates.
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  let colour = "black";

  // Loop over all child divs of cols-container and add event listener to them that
  // sets the value of colour to the background color of the selected palette tile.
  for (let i = 0; i < cols.children.length; i++) {
    cols.children[i].addEventListener('click', (event) => { colour = getComputedStyle(event.currentTarget).backgroundColor })
    }

  // On each mousedown we get the css transform property of the canvas and divide
  // the perceived coordinates by the zoom amount to get pixel accurate position.
  canvas.addEventListener('mousedown', function(evt) {
    var a = canvas.style.transform;
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


  // begin meme
  document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === "`") {
      // do not alert when only Control key is pressed.
      document.querySelector("#stage").className = "speen";
    }
  });
  // end meme

}


export { initClicker };
