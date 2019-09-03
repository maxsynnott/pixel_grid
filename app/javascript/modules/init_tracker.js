function initTracker() {
  const hoverCheck = async (x, y) => {
    setTimeout(() => { if ((x == mouseX) && (y == mouseY)) {
                         const imgData = ctx.getImageData(x, y, 1, 1);
                         if (JSON.stringify([imgData, x, y]) != JSON.stringify(currentHover)) {
                           const alpha = imgData.data[3];
                           imgData.data[3] = 150; // Wanted hover alpha value, 0-255
                           ctx.putImageData(imgData, x, y);
                           if (currentHover.length != 0) {
                             currentHover[0].data[3] = alpha
                             ctx.putImageData(currentHover[0], currentHover[1], currentHover[2])
                           }
                           currentHover = [imgData, x, y]
                         };
                       }
                     }, 50); // Number of miliseconds before pixel is highlighted
  }

  canvas.addEventListener('mousemove', (event) => {
    click = false;
    const rect = canvas.getBoundingClientRect();
    const regex = /[\.|\d]+/;
    const zoom = stage.style.transform.match(regex);
    mouseX = Math.floor((event.clientX - rect.left) / zoom);
    mouseY = Math.floor((event.clientY - rect.top) / zoom);
    hoverCheck(mouseX, mouseY);
  });
}

export { initTracker };
