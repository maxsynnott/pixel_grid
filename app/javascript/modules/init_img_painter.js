const initImgPainter = () => {
  const drawPixel = async (x, y, image) => {
    ctx.drawImage(image,x,y,1,1,x,y,1,1);
  }

  // input ['activator key', 'image url']
  const images = [
    ['w', 'https://x8bitrain.github.io/globe.png']
  ]

  // ['1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/161px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg'],
  //   ['2', 'https://cdn.evbuc.com/images/64008665/261339932890/2/logo.png'],
  //   ['3', 'https://cdn.emojidex.com/emoji/px128/hand_with_index_and_middle_finger_crossed.png?1453368291'],
  //   ['4', 'https://x8bitrain.github.io/lewagon-study/landing-page/thepixelgrid.jpg'],
  //   ['a', 'https://avatars1.githubusercontent.com/u/12513436?s=300&v=4'],
  //   ['d', 'https://res.cloudinary.com/wagon/image/upload/c_fill,g_face,h_300,w_300/vewklncjschzufwaixd6.jpg'],

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
        // Just for presentation purposes
        if (event.key == "p") {
          window.location.href += "grids/7";
        }
      })
      console.log(`${data[0]} ready`)
    }
  })
}

export { initImgPainter };
