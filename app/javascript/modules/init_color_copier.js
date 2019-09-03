const initColorCopier = () => {
  document.addEventListener('keydown', (event) => {
    if (event.key === "Control") {
      const rgba = ctx.getImageData(mouseX, mouseY, 1, 1).data;
      color = `rgb(${rgba[0]}, ${rgba[1]}, ${rgba[2]}`;
    }
  });
};

export { initColorCopier };
