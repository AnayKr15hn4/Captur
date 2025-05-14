document.addEventListener('DOMContentLoaded', function () {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.querySelector('.lightbox-close');
    const galleryItems = document.querySelectorAll('.gallery-item img');
  
    galleryItems.forEach(img => {
      img.addEventListener('click', function () {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
      });
    });
  
    lightboxClose.addEventListener('click', function () {
      lightbox.style.display = 'none';
    });
  
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        lightbox.style.display = 'none';
      }
    });
  });