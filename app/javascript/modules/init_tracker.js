function initTracker() {
  canvas.addEventListener('mousemove', (event) => {
    click = false;
    const rect = canvas.getBoundingClientRect();
    const regex = /[\.|\d]+/;
    const zoom = stage.style.transform.match(regex);
    mouseX = Math.floor((event.clientX - rect.left) / zoom);
    mouseY = Math.floor((event.clientY - rect.top) / zoom);
  });
}

export { initTracker };
