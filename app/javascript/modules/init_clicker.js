function initClicker() {
  const regex = new RegExp('[r|g|b|(|)| ]', 'g')

  document.addEventListener('mousedown', () => click = true);

  document.addEventListener('mouseup', (evt) => {
    if (click) {
      // converts color into rgba array
      let rgb = (color.replace(regex, '').split(','));
      rgb.push(255)
      const rgba = rgb.map( num => parseInt(num, 10));
      const colorIndex = parseInt(Object.keys(rgbas).find(key => JSON.stringify(rgbas[key]) === JSON.stringify(rgba)), 10);
      fetch(`/api/v1/grids/${canvas.dataset.id}/place_pixel`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ x: mouseX,
                               y: mouseY,
                               colorIndex: colorIndex
                            })
      })
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
