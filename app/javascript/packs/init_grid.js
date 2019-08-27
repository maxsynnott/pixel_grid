const initGrid = () => {
  var canvas = document.getElementById('grid')
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
  } else {
    // Code to run when canvas is unsupported
  }
}


export { initGrid };
