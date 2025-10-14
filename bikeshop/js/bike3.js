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

const bikeData = {
    "ace": {
        "black": {
            large: "../images/Ace_Two_Matte_Black_NEW.png",
            thumb: "../images/Ace_Two_Matte_Black_NEW.png"
        },
        "graphit": {
            large: "../images/Ace_Two_-_Graphite_-_NEW.png",
            thumb: "../images/Ace_Two_-_Graphite_-_NEW.png"
        },
        "dune": {
            large: "../images/Ace_Two_-_Dune_-_NEW.png",
            thumb: "../images/Ace_Two_-_Dune_-_NEW.png"
        },
        "jetblack": {
            large: "../images/Ace_Two_-_Jet_Black_-_NEW.png",
            thumb: "../images/Ace_Two_-_Jet_Black_-_NEW.png"
        }
    },
    "ivy": {
        "black": {
            large: "../images/electric_ivy.png",
            thumb: "../images/electric_ivy.png"
        },
        "graphit": {
            large: "../images/Ivy_Graphite_1.webp",
            thumb: "../images/Ivy_Graphite_1.webp"
        },
        "dune": {
            large: "../images/Ivy_Two_-_Dune_-_NEW.webp",
            thumb: "../images/Ivy_Two_-_Dune_-_NEW.webp"
        },
        "pebble": {
            large: "../images/Ivy_Two_-_Pebble_Grey_-_NEW.webp",
            thumb: "../images/Ivy_Two_-_Pebble_Grey_-_NEW.webp"
        }
    }

};

const currentImage = document.getElementById('main-bike-image');
const productName = document.getElementById('product-name');
const bikeModes = document.querySelectorAll('.bikemode');
const colorButtons = document.querySelectorAll('.circles');
const colorName = document.querySelector('.color-name');
const arrowLeft = document.querySelector('.arrow.left');
const arrowRight = document.querySelector('.arrow.right');

let currentModel = 'ace';
let currentColor = 'black';

function updateDisplay() {
    currentImage.src = bikeData[currentModel][currentColor].large;
    productName.textContent = currentModel === 'ace' ? 'Electric Ace Two' : 'Electric Ivy Two';
}

bikeModes.forEach(mode => {
    mode.addEventListener('click', () => {
        const modelAlt = mode.querySelector('img').alt;
        currentModel = modelAlt === 'electric-ace' ? 'ace' : 'ivy';
        currentColor = 'black';
        colorName.textContent = '';

        const lastCircle = colorButtons[colorButtons.length - 1];

        if (currentModel === 'ivy') {
            lastCircle.className = 'circles pebble';
            lastCircle.dataset.color = 'pebble';
        } else {
            lastCircle.className = 'circles jetblack';
            lastCircle.dataset.color = 'jetblack';
        }
        updateDisplay();
        updateColorName();
        updateActiveCircle();
    });
});

colorButtons.forEach(circle => {
    circle.addEventListener('click', () => {
        const clickedColor = circle.dataset.color;
        if (bikeData[currentModel][clickedColor]) {
            currentColor = clickedColor;
            updateDisplay();
            updateColorName();
        }
    });
});

function updateActiveCircle() {
    colorButtons.forEach(circle => circle.classList.remove('active'));

    const activeCircle = Array.from(colorButtons).find(circle => circle.dataset.color === currentColor);
    if (activeCircle) {
        activeCircle.classList.add('active');
    }
}

function changeColor(direction) {
    const colorsArray = Object.keys(bikeData[currentModel]);
    let currentIndex = colorsArray.indexOf(currentColor);

    if (direction === 'left') {
        currentIndex = (currentIndex - 1 + colorsArray.length) % colorsArray.length;
    } else if (direction === 'right') {
        currentIndex = (currentIndex + 1) % colorsArray.length;
    }

    currentColor = colorsArray[currentIndex];
    updateDisplay();
    updateColorName();
    updateActiveCircle();
}

arrowLeft.addEventListener('click', () => {
    changeColor('left');
});

arrowRight.addEventListener('click', () => {
    changeColor('right');
});

function updateColorName() {
    if (currentModel === 'ace') {
        switch (currentColor) {
            case 'black':
                colorName.textContent = 'Ace Two Matte Black';
                break;
            case 'graphit':
                colorName.textContent = 'Ace Two Graphite';
                break;
            case 'dune':
                colorName.textContent = 'Ace Two Dune';
                break;
            case 'jetblack':
                colorName.textContent = 'Ace Two Jet Black';
                break;
            default:
                colorName.textContent = 'Ace Two';
        }
    } else if (currentModel === 'ivy') {
        switch (currentColor) {
            case 'black':
                colorName.textContent = 'Ivy Two Matte Black';
                break;
            case 'graphit':
                colorName.textContent = 'Ivy Two Graphite';
                break;
            case 'dune':
                colorName.textContent = 'Ivy Two Dune';
                break;
            case 'pebble':
                colorName.textContent = 'Ivy Two Pebble Grey';
                break;
            default:
                colorName.textContent = 'Ivy Two';
        }
    }
}

updateDisplay();

// navbar

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});