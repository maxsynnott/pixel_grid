const initColorCopier = () => {
  const regex = new RegExp('[r|g|b|(|)| ]', 'g')
  document.addEventListener('keydown', (event) => {
    if (event.key === "Control") {
      const rgba = ctx.getImageData(mouseX, mouseY, 1, 1).data;
      color = `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]}`;
      let rgb = (color.replace(regex, '').split(','));
      rgb.push(255)

      const rgbaArray = rgb.map( num => parseInt(num, 10));
      // Super shitty code, come back and clean this up
      const colorIndex = parseInt(Object.keys(rgbas).find((key) => {
        let match = true
        let comparison = rgbas[key]
        for (let i = 0; i < 4; i++) {
          if ((rgbaArray[i] > (comparison[i] + 4)) || (rgbaArray[i] < (comparison[i] - 4))) {
            match = false;
          }
        }
        return match
      }), 10);

      const cols = document.querySelector(".cols-container");
      const current = document.querySelector(".active")
      if (current) {
        current.classList.remove('active')
      }
      cols.children[colorIndex].classList.add('active')
    }
  });
};

export { initColorCopier };
