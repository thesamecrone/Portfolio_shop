  function findInteractiveColourContainer(wrapper) {
    const containers = wrapper.querySelectorAll('.colours');
    for (const c of containers) {
      if (c.querySelector('.circles') || c.querySelector('button')) return c;
    }
    
    return containers[0] || null;
  }

  function showSlide(wrapper, index) {
    const slides = wrapper.querySelectorAll('.carousel-item');
    if (!slides.length) return;
    const total = slides.length;
    if (index >= total) index = 0;
    if (index < 0) index = total - 1;

    wrapper.dataset.currentIndex = index;
    const inner = wrapper.querySelector('.carousel-inner');

    inner.style.transform = `translateX(${ -index * 100 }%)`;

    const colours = findInteractiveColourContainer(wrapper);
    if (colours) {
      const dots = colours.querySelectorAll('.circles');
      dots.forEach(d => d.classList.remove('active'));
      if (dots[index]) dots[index].classList.add('active');
    }
  }

  function nextSlide(btn) {
    const wrapper = btn.closest('.wrapper');
    let idx = parseInt(wrapper.dataset.currentIndex) || 0;
    showSlide(wrapper, idx + 1);
  }

  function prevSlide(btn) {
    const wrapper = btn.closest('.wrapper');
    let idx = parseInt(wrapper.dataset.currentIndex) || 0;
    showSlide(wrapper, idx - 1);
  }


  document.querySelectorAll('.wrapper').forEach(wrapper => {
    const colours = findInteractiveColourContainer(wrapper);
    if (colours) {
      const dots = colours.querySelectorAll('.circles');
      dots.forEach((dot, i) => {
        if (!dot.hasAttribute('data-index') || dot.dataset.index === '') {
          dot.dataset.index = i;
        }
        dot.addEventListener('click', () => {
          const index = parseInt(dot.dataset.index, 10) || 0;
          showSlide(wrapper, index);
        });
      });
    }
    showSlide(wrapper, 0);
  });