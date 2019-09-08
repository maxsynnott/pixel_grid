const initImgPainter = () => {
  const drawPixel = async (x, y, image) => {
    ctx.drawImage(image,x,y,1,1,x,y,1,1);
  }

  // input ['activator key', 'image url']
  const images = [
    ['w', 'https://x8bitrain.github.io/globe.png']
  ]

  images.forEach((data) => {
    const image = new Image
    image.crossOrigin = "Anonymous"
    image.src = data[1]
    let coords = [];
    image.onload = () => {
      for(let y = 0; y < image.height; y++) {
        for(let x = 0; x < image.width; x++) {
          coords.push([x, y])
        }
      }
      for (let i = coords.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [coords[i], coords[j]] = [coords[j], coords[i]];
      }
      document.addEventListener('keyup', (event) => {
        if (event.key == data[0]) {
          coords.forEach((xy) => {
            setTimeout(() => {
              drawPixel(xy[0], xy[1], image)
            }, 100)
          })
        }
      })
      console.log(`${data[0]} ready`)
    }
  })
}

export { initImgPainter };
