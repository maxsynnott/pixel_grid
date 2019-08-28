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

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var canvas = document.getElementById('grid');
var context = canvas.getContext('2d');

const getGridPos = () => {

};

canvas.addEventListener('mousemove', function(evt) {
  var a = stage.style.transform;
  var b = a.substring(7);
  var c = b.slice(0, -1);
  var d = c.split(',');
  var mousePos = getMousePos(canvas, evt);
  var coordsX = Math.floor(mousePos.x / d[0]);
  var coordsY = Math.floor(mousePos.y / d[0]);
  console.log("X: " + coordsX + "\n" + "Y: " + coordsY + "\n");
}, false);

export { initGrid };

// var dbgCanvasCoords = "Canvas coords:" + '\n' + "Zoom:" + d[0] + '\n' + "X:" + d[4] + '\n' + "Y:" + d[5];
// var dbgMouseCoords = 'Mouse coords: ' + '\n' + "X:" + mousePos.x + '\n' + "Y:" + mousePos.y + "\n" + "Real X:" + Math.floor(mousePos.x / d[0]) + "\n" + "Real Y:" + Math.floor(mousePos.y / d[0]);
