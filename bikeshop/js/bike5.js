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

// navbar

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// carousel

document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.album');
  const arrowLeft = document.querySelector('.arrow1');
  const arrowRight = document.querySelector('.arrow2');
  const cards = document.querySelectorAll('.card');

  if (!carousel || !arrowLeft || !arrowRight || cards.length === 0) {
    console.error('Elements were not found!');
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