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