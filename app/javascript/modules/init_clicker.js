function initClicker() {
  // This is horrifically ineffecient code and must be cleaned but it works
  // NTS: rework entire function

  const colorToIndex = (rgbaArray) => {
    return parseInt(Object.keys(rgbas).find((key) => {
        let match = true
        let comparison = rgbas[key]
        for (let i = 0; i < 4; i++) {
          if ((rgbaArray[i] > (comparison[i] + 4)) || (rgbaArray[i] < (comparison[i] - 4))) {
            match = false;
          }
        }
        return match
      }), 10);
  }

  const regex = new RegExp('[r|g|b|(|)| ]', 'g')

  const pixelCount = document.querySelector(".credits")

  document.addEventListener('mousedown', () => click = true);

  document.addEventListener('mouseup', (evt) => {
    if (click && (evt.target.id == 'grid')) {
      const originalRgbaArray = ctx.getImageData(mouseX, mouseY, 1, 1).data

      currentHover = []
      ctx.fillStyle = color;
      ctx.fillRect(mouseX, mouseY, 1, 1);

      if (pixelCount) {
        pixelCount.innerText = `Pixels: ${pixelCount.innerText.match(/[\d]+/) - 1}`
      }

      // converts color into rgba array
      let rgb = (color.replace(regex, '').split(','));
      rgb.push(255)
      const newRgbaArray = rgb.map( num => parseInt(num, 10));

      const colorIndex = colorToIndex(newRgbaArray);

      // currently gets confused by hover and needs reworking
      if (colorToIndex(originalRgbaArray) != colorIndex) {
        fetch(`/api/v1/grids/${canvas.dataset.id}/place_pixel`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ x: mouseX,
                                 y: mouseY,
                                 colorIndex: colorIndex
                              })
        })
      }
    }
  });

  // Spinny boy
  // document.addEventListener('keydown', (event) => {
  //   const keyName = event.key;
  //   if (keyName === "`") {
  //     // do not alert when only Control key is pressed.
  //     document.querySelector("#grid").className = "speen";
  //   }
  // });
}

export { initClicker };
