    window.addEventListener('load', adjustGalleryHeight);
    window.addEventListener('resize', adjustGalleryHeight);
  
    function adjustGalleryHeight() {
      const gallerySection = document.querySelector('.gallery-section');
      const galleryItems = document.querySelectorAll('.gallery-masonry .gallery-item');
  
      let maxBottom = 0;
      galleryItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        const bottom = rect.top + rect.height + window.scrollY;
        if (bottom > maxBottom) {
          maxBottom = bottom;
        }
      });
  
      const sectionTop = gallerySection.getBoundingClientRect().top + window.scrollY;
      const totalHeight = maxBottom - sectionTop;
  
      gallerySection.style.height = totalHeight + 20 + 'px';
    }