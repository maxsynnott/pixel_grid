const initGrid = () => {
  let canvas = document.getElementById('grid');
  if (canvas.getContext) {
    let ctx = canvas.getContext('2d');
    // Avoided setting to variables as an attempt to speed process up.
    // I want to test speed dif using an api to grab the 4mb of data
    let pixelData = new ImageData(Uint8ClampedArray.from(JSON.parse(canvas.dataset.pixelArray)),
                                  canvas.width, canvas.height);
    ctx.putImageData(pixelData, 0, 0);
  } else {
    // Code to run when canvas is unsupported
  };
};

export { initGrid };
