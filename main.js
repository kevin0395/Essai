document.addEventListener("DOMContentLoaded", () => {
  const previews = document.querySelectorAll('.preview');
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  
  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetIndex = item.getAttribute('data-target');
      const targetPreview = previews[targetIndex];
      targetPreview.scrollIntoView({ behavior: 'smooth' });
    });
  });

  window.addEventListener('scroll', () => {
    let current = '';
    previews.forEach((preview, index) => {
      const rect = preview.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        current = index;
      }
    });
    sidebarItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('data-target') == current) {
        item.classList.add('active');
      }
    });
  });

  document.querySelectorAll('.preview').forEach(preview => {
    const url = preview.getAttribute('data-url');
    const iframe = document.createElement('iframe');
    iframe.title = "Speckle";
    iframe.src = url;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.frameBorder = "0";

    preview.querySelector('.preview-iframe-container').appendChild(iframe);
    preview.addEventListener('click', () => {
      window.location.href = url;
    });
  });
});
