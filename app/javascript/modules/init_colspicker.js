function initColsPicker() {
  let cols = document.querySelector(".cols-container");

  // Insert 16 divs into cols-container and add event listener to each that
  // sets the value of colour to the background color of the selected palette tile.
  for (let i = 0; i < 16; i++) {
      cols.insertAdjacentHTML('beforeend',
      `<div style='background-color:rgba(${rgbas[i][0]},${rgbas[i][1]},${rgbas[i][2]},${rgbas[i][3] / 255});'></div>`)
      cols.children[i].addEventListener('click', (event) => {
        color = event.currentTarget.style.backgroundColor;
        const current = document.querySelector(".active")
        if (current) {
          current.classList.remove('active')
        }
        event.currentTarget.classList.add('active')
      })
    };
}

export { initColsPicker };
