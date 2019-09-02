function initClicker() {
  canvas.addEventListener('mousedown', (event) => {
    ctx.fillStyle = color;
    // Outputs a 1x1 pixel on the screen where you click based on coords.
    ctx.fillRect(mouseX, mouseY, 1, 1);
  }, false);

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
