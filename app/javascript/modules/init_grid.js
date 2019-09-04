const initGrid = () => {
  // Grabs the canvas element
  if (canvas.getContext) {
    let pixelBits = canvas.dataset.pixelBits
    let pixelArray = [];
    const queue = JSON.parse(canvas.dataset.queue);

    // Converts each 4 bit number into an rgba and pushes it into pixelArray
    for (let i = 0; i < pixelBits.length; i+= 4) {
      rgbas[parseInt(pixelBits.slice(i, i + 4), 2)].forEach(int => pixelArray.push(int));
    }

    // Converts the pixelArray to a "Uint8ClampedArray" which is then required
    // in the next line to build the imageData object
    let clampedPixelArray = Uint8ClampedArray.from(pixelArray)
    let pixelGridData = new ImageData(clampedPixelArray, canvas.width, canvas.height);
    // Paint the pixelGridData to the canvas
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.msImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    ctx.putImageData(pixelGridData, 0, 0);

    for (let i = 0; i < queue.length; i++) {
      const placement = queue[i];
      const pixel = new ImageData(Uint8ClampedArray.from(rgbas[placement[2]]), 1, 1);
      ctx.putImageData(pixel, placement[0], placement[1]);
    }

    canvas.style.boxShadow = `0 ${canvas.height / 75}px ${canvas.height / 50}px rgba(0,0,0,0.30)`
  } else {
    // Code to run when canvas is unsupported
  };
};

export { initGrid };


