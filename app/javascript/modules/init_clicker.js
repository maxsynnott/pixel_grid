function initClicker() {

  // getting the mouse coordinates.
  function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: evt.clientX - rect.left,
      y: evt.clientY - rect.top
    };
  }

  document.addEventListener('mousedown', () => click = true);

  document.addEventListener('mouseup', (evt) => {
    if (click) {
      // On each click we get the css transform property of the canvas and divide
      // the perceived coordinates by the zoom amount to get pixel accurate position.
      const regex = /[\.|\d]+/;
      const zoom = canvas.style.transform.match(regex);
      const mousePos = getMousePos(canvas, evt);
      const coordsX = Math.floor(mousePos.x / zoom);
      const coordsY = Math.floor(mousePos.y / zoom);
      // console.log("X: " + coordsX + "\n" + "Y: " + coordsY + "\n");
      // console.log(colour);
      ctx.fillStyle = color;
      // Outputs a 1x1 pixel on the screen where you click based on coords.
      ctx.fillRect(coordsX, coordsY, 1, 1);
    }
  });

  // Spinny boy
  // document.addEventListener('keydown', (event) => {
  //   const keyName = event.key;
  //   if (keyName === "`") {
  //     // do not alert when only Control key is pressed.
  //     document.querySelector("#stage").className = "speen";
  //   }
  // });

}

export { initClicker };
