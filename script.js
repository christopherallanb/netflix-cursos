document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const row = entry.target.querySelector('.curses-row');
          activateCarrossel(row);
        }
      });
    });
  
    document.querySelectorAll('.category').forEach(section => {
      observer.observe(section);
    });
  
    function activateCarrossel(row) {
      let autoScroll = setInterval(() => {
        if (row.scrollLeft + row.clientWidth >= row.scrollWidth) {
          row.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          row.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }, 3000);
  
      const prevBtn = row.closest('.category').querySelector('.carrossel-prev');
      const nextBtn = row.closest('.category').querySelector('.carrossel-next');
  
      prevBtn.addEventListener('click', () => {
        clearInterval(autoScroll);
        row.scrollBy({ left: -300, behavior: 'smooth' });
      });
  
      nextBtn.addEventListener('click', () => {
        clearInterval(autoScroll);
        row.scrollBy({ left: 300, behavior: 'smooth' });
      });
    }
  });