const initGrid = () => {
  var canvas = document.getElementById('grid');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    // Grabs data stored in the canvas tag
    const placements = JSON.parse(canvas.dataset.placements);
    const pixel_size = canvas.dataset.pixelSize
    // Iterates over the placements, drawing each one to the grid
    placements.forEach((placement) => {
      ctx.fillStyle = placement['color'];
      ctx.fillRect(placement['x'], placement['y'], pixel_size, pixel_size);
    })
  } else {
    // Code to run when canvas is unsupported
  };
};

export { initGrid };
