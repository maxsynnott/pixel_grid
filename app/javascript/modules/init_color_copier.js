const initColorCopier = () => {
  document.addEventListener('keyup', (event) => {
    if (event.key === "Control") {
      const rgba = ctx.getImageData(mouseX, mouseY, 1, 1).data;
      color = `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3] / 255})`;
    }
  });
};

export { initColorCopier };
