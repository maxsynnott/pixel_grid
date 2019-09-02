function initTracker() {
  canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const regex = /[\.|\d]+/;
    const zoom = canvas.style.transform.match(regex);
    mouseX = Math.floor((event.clientX - rect.left) / zoom);
    mouseY = Math.floor((event.clientY - rect.top) / zoom);
  });
}

export { initTracker };
