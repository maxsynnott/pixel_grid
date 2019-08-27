const initGrid = () => {
  var canvas = document.getElementById('grid');
  if (canvas.getContext) {
    // Selects draw context and pixel color
    var ctx = canvas.getContext('2d');
    //
    const placements = JSON.parse(canvas.dataset.placements);
    const pixel_size = canvas.dataset.pixelSize
    placements.forEach((placement) => {
      console.log(placement);
      ctx.fillStyle = placement['color'];
      // console.log(`x: ${placement['x']}, y: ${placement['x']}, color: ${placement['color']}, pixel_size: ${pixel_size}`)
      ctx.fillRect(placement['x'], placement['y'], pixel_size, pixel_size);
    })
  } else {
    // Code to run when canvas is unsupported
  };
};

export { initGrid };
