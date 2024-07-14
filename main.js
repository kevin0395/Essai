document.addEventListener("DOMContentLoaded", () => {
  const previews = document.querySelectorAll('.preview');
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const miniPreviewsContainer = document.getElementById('mini-previews-container');
  const miniPreviews = document.querySelectorAll('.mini-preview');

  // Set "Accueil" as active when the page loads
  const homeButton = document.querySelector('.sidebar-item[data-target="home"]');
  homeButton.classList.add('active');

  sidebarItems.forEach(item => {
    item.addEventListener('click', () => {
      const target = item.getAttribute('data-target');
      sidebarItems.forEach(item => item.classList.remove('active')); // Remove active class from all items
      if (target === "home") {
        item.classList.add('active'); // Keep "Accueil" active on click
        window.scrollTo({ top: 0, behavior: 'smooth' });
        miniPreviewsContainer.classList.toggle('hidden'); // Show/Hide mini previews
      } else {
        const targetIndex = parseInt(target, 10);
        const targetPreview = previews[targetIndex];
        targetPreview.scrollIntoView({ behavior: 'smooth' });
        item.classList.add('active'); // Set the clicked item as active
      }
    });
  });

  miniPreviews.forEach(item => {
    item.addEventListener('click', () => {
      const targetIndex = parseInt(item.getAttribute('data-target'), 10);
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
