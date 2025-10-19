const scroll = document.querySelector('.scrollToTop');
scroll.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', () => {
  if (window.scrollY === 0) {
    scroll.style.visibility = 'hidden';
  } else {
    scroll.style.visibility = 'visible';
  }
});


// carousel

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.barboxes');
    const arrowLeft = document.querySelector('.arrow1');
    const arrowRight = document.querySelector('.arrow2');
    const cards = Array.from(carousel.querySelectorAll('.barbox'));

    if (!carousel || !arrowLeft || !arrowRight || cards.length === 0) {
        console.error('Elements not found!');
        return;
    }

    cards.forEach(card => {
        const clone = card.cloneNode(true);
        carousel.appendChild(clone);
    });

    const allCards = Array.from(carousel.querySelectorAll('.barbox'));

    let currentPosition = 0;

    function scrollToCard(index) {
        const target = allCards[index].offsetLeft;
        carousel.scrollTo({
            left: target,
            behavior: 'smooth'
        });
    }

    arrowLeft.addEventListener('click', function () {
        currentPosition--;
        if (currentPosition < 0) {
            currentPosition = cards.length - 1;
            carousel.scrollLeft = allCards[currentPosition + cards.length].offsetLeft;
            setTimeout(() => scrollToCard(currentPosition + cards.length - 1), 20);
        } else {
            scrollToCard(currentPosition);
        }
    });

    arrowRight.addEventListener('click', function () {
        currentPosition++;
        if (currentPosition >= cards.length) {
            currentPosition = 0;
            carousel.scrollLeft = allCards[currentPosition].offsetLeft - allCards[0].offsetLeft;
            setTimeout(() => scrollToCard(currentPosition + 1), 20);
        } else {
            scrollToCard(currentPosition);
        }
    });

    scrollToCard(currentPosition);
});



// navbar

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});