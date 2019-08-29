const initGrid = () => {
  // Grabs the canvas element
  let canvas = document.getElementById('grid');
  let ctx = canvas.getContext('2d');
  if (canvas.getContext) {
    // Color values
    const rgbas = {0: [255, 255, 255, 255],
                  1: [87, 87, 87, 255],
                  2: [173, 35, 35, 255],
                  3: [42, 75, 215, 255],
                  4: [29, 105, 20, 255],
                  5: [129, 74, 25, 255],
                  6: [129, 38, 192, 255],
                  7: [160, 160, 160, 255],
                  8: [129, 197, 122, 255],
                  9: [157, 175, 255, 255],
                  10: [41, 208, 208, 255],
                  11: [255, 146, 51, 255],
                  12: [255, 238, 51, 255],
                  13: [233, 222, 187, 255],
                  14: [255, 205, 243, 255],
                  15: [0, 0, 0, 255]}

    let pixelBits = canvas.dataset.pixelBits
    let pixelArray = [];

    // Converts each 4 bit number into an rgba and pushes it into pixelArray
    for (let i = 0; i < pixelBits.length; i+= 4) {
      rgbas[parseInt(pixelBits.slice(i, i + 4), 2)].forEach(int => pixelArray.push(int));
    }

    // Converts the pixelArray to a "Uint8ClampedArray" which is then required
    // in the next line to build the imageData object
    let clampedPixelArray = Uint8ClampedArray.from(pixelArray)
    let pixelGridData = new ImageData(clampedPixelArray, canvas.width, canvas.height);
    // Paint the pixelGridData to the canvas
    ctx.putImageData(pixelGridData, 0, 0);
  } else {
    // Code to run when canvas is unsupported
  };
};

export { initGrid };
