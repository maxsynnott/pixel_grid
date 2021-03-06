function initTracker() {

  // This is causing a few issues and should maybe be rethought
  const hoverCheck = async (x, y) => {
    setTimeout(() => {
      if ((x == mouseX) && (y == mouseY)) {
        const imgData = ctx.getImageData(x, y, 1, 1);
        if (JSON.stringify([imgData, x, y]) != JSON.stringify(currentHover)) {
          const alpha = imgData.data[3]
          const imgDataCopy = imgData
          imgDataCopy.data[3] = 100; // Wanted hover alpha value, 0-255
          ctx.putImageData(imgDataCopy, x, y);
          if (currentHover.length != 0) {
            currentHover[0].data[3] = alpha
            ctx.putImageData(currentHover[0], currentHover[1], currentHover[2])
          }
          currentHover = [imgDataCopy, x, y]
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
    if (window.innerWidth > 800) {
      hoverCheck(mouseX, mouseY);
    }
  });
}

export { initTracker };
