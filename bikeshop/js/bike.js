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

  inner.style.transform = `translateX(${-index * 100}%)`;

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

const headers = document.querySelectorAll('.accordion-header');
headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.accordion-item').forEach(item => item.classList.remove('active'));
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

const scroll = document.querySelector('.scrollToTop');
scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if(window.scrollY === 0) {
    scroll.style.visibility = 'hidden';
  } else {
    scroll.style.visibility = 'visible';
  }
});

// page 2

document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.album');
  const arrowLeft = document.querySelector('.arrow1');
  const arrowRight = document.querySelector('.arrow2');
  const cards = document.querySelectorAll('.card');

  if (!carousel || !arrowLeft || !arrowRight || cards.length === 0) {
    console.error('Элементы не найдены!');
    return;
  }

  cards.forEach(card => {
    const clone = card.cloneNode(true);
    carousel.appendChild(clone);
  });

  const totalCards = cards.length;
  const cardWidth = cards[0].offsetWidth + 63;
  let currentPosition = 0;

  arrowLeft.addEventListener('click', function() {
    currentPosition = (currentPosition - 1 + totalCards) % totalCards;
    const scrollToPosition = currentPosition * cardWidth;
    carousel.scrollTo({
      left: scrollToPosition,
      behavior: 'smooth'
    });
  });

  arrowRight.addEventListener('click', function() {
    currentPosition = (currentPosition + 1) % totalCards;
    const scrollToPosition = currentPosition * cardWidth;
    carousel.scrollTo({
      left: scrollToPosition,
      behavior: 'smooth'
    });
  });
});