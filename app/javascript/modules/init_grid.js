const initGrid = () => {
  let canvas = document.getElementById('grid');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    // Grabs data stored in the canvas tag
    let pixelArray = JSON.parse(canvas.dataset.pixelArray);
    pixelArray = Uint8ClampedArray.from(pixelArray);
    console.log(pixelArray);
    let gridImage = new ImageData(pixelArray, 1000, 1000);
    ctx.putImageData(gridImage, 0, 0);
  } else {
    // Code to run when canvas is unsupported
  };
};

export { initGrid };
