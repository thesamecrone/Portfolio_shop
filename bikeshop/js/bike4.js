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

const boxes = document.querySelectorAll('.barbox');
const third = boxes[2];

let swapped = false;

third.addEventListener('click', () => {
    if (!swapped) {
        boxes[1].style.order = 3;
        third.style.order = 2;
        swapped = true;
    } else {
        boxes[0].style.order = 1;
        boxes[1].style.order = 2;
        boxes[2].style.order = 3;
        swapped = false;
    }
});