const initEffectListeners = () => {
  // This was last last minute

  let x = 0
  let y = 0

  const draw = async (j) => {
    const rgba = rgbas[j]
    ctx.fillStyle = `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]}`;
    ctx.fillRect(x, y, 1, 1)
  }

  document.addEventListener('keyup', (event) => {
    if (event.key == ',') {
      console.log('I ran')
      const width = canvas.width
      const height = canvas.height
      const count = ((canvas.width * canvas.height) / 10)

      for (let i = 0; i < count; i++) {
        for (let j = 0; j < 10; j++) {
          draw(j)
          x += 1
          if (x > canvas.width) {
            x = 0
            y += 1
          }
        }
      }
    }
  })
}


export { initEffectListeners };
