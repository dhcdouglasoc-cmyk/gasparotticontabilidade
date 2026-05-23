document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.carousel-card');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const dotsContainer = document.querySelector('.carousel-dots');

  if (!track || cards.length === 0) return;

  let index = 0;
  let startX = 0;
  let isDragging = false;

  const updateCarousel = () => {
    const cardWidth = cards[0].offsetWidth;
    track.style.transform = `translateX(-${index * cardWidth}px)`;

    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('span');
      dots.forEach(dot => dot.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
    }
  };

  // Criar dots (se existir container)
  if (dotsContainer) {
    cards.forEach((_, i) => {
      const dot = document.createElement('span');
      if (i === 0) dot.classList.add('active');

      dot.addEventListener('click', () => {
        index = i;
        updateCarousel();
      });

      dotsContainer.appendChild(dot);
    });
  }

  // Botões (seguro contra null)
  nextBtn?.addEventListener('click', () => {
    index = (index + 1) % cards.length;
    updateCarousel();
  });

  prevBtn?.addEventListener('click', () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  // Swipe (mobile)
  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  track.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const moveX = e.touches[0].clientX;
    const diff = startX - moveX;

    if (diff > 50) {
      index = (index + 1) % cards.length;
      updateCarousel();
      isDragging = false;
    }

    if (diff < -50) {
      index = (index - 1 + cards.length) % cards.length;
      updateCarousel();
      isDragging = false;
    }
  });

  track.addEventListener('touchend', () => {
    isDragging = false;
  });

});
