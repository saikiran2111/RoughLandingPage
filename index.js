document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
  
    let currentIndex = 0;
    const totalImages = document.querySelectorAll('.carousel-item').length;
  
    function showNext() {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    }
  
    function updateCarousel() {
      const translateValue = -currentIndex * 100 + '%';
      carouselInner.style.transform = 'translateX(' + translateValue + ')';
    }
  
    setInterval(showNext, 5000);
  });
  
