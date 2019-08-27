const initGrid = () => {
  let canvas = document.getElementById('grid');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    // Grabs data stored in the canvas tag
    console.log(canvas.dataset.pixelArray);
    let array = Uint8ClampedArray.from(canvas.dataset.pixelArray);
    console.log(array);
    gridImage = new ImageData(array, 1000, 1000);
    ctx.putImageData(gridImage, 0, 0);
  } else {
    // Code to run when canvas is unsupported
  };
};

export { initGrid };
