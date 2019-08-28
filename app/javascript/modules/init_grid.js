const initGrid = () => {
  // Grabs the canvas element
  let canvas = document.getElementById('grid');
  if (canvas.getContext) {
    // ctx is what we use to interact with the canvas
    let ctx = canvas.getContext('2d');
    // Extracts and parses the pixelArray passed through the HTML dataset in show
    // Probably should change this to an API/fetch request
    let pixelArray = JSON.parse(canvas.dataset.pixelArray)
    // Converts the pixelArray to a "Uint8ClampedArray" which is required to make ImageData
    let clampedPixelArray = Uint8ClampedArray.from(pixelArray)
    // Creates the ImageData object from the clampedPixelArray
    let pixelGridData = new ImageData(clampedPixelArray, canvas.width, canvas.height);
    // Paint the pixelGridData to the canvas
    ctx.putImageData(pixelGridData, 0, 0);
  } else {
    // Code to run when canvas is unsupported
  };
};

export { initGrid };
