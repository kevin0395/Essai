document.querySelectorAll('.preview').forEach(preview => {
  const url = preview.getAttribute('data-url');
  const iframe = document.createElement('iframe');
  iframe.title = "Speckle";
  iframe.src = url;
  iframe.width = "100%";
  iframe.height = "100%";
  iframe.frameBorder = "0";

  preview.appendChild(iframe);
  preview.addEventListener('click', () => {
    window.location.href = url;
  });
});
