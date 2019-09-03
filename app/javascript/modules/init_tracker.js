function initTracker() {
  const hoverCheck = async (x, y) => {
    const startX = x
    const startY = y
    setTimeout(() => { if ((startX == mouseX) && (startY == mouseY)) {
                         const imgData = ctx.getImageData(startX, startY, 1, 1);
                         if (JSON.stringify([imgData, x, y]) != JSON.stringify(currentHover)) {
                           const alpha = imgData.data[3];
                           imgData.data[3] = 150;
                           ctx.putImageData(imgData, startX, startY);
                           if (currentHover.length != 0) {
                             currentHover[0].data[3] = alpha
                             ctx.putImageData(currentHover[0], currentHover[1], currentHover[2])
                           }
                           currentHover = [imgData, startX, startY]
                         };
                       }
                     }, 50);
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
