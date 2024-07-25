document.getElementById("search-icon").addEventListener("click", function () {
    document.getElementById("search-input").focus();
    document.getElementById("search-form").classList.toggle("show");
});

document.getElementById("cart-icon").addEventListener("click", function () {
    var cartContent = document.getElementById("cart-content");
    cartContent.style.display = (cartContent.style.display === "none") ? "block" : "none";
});

const phoneIcon = document.getElementById('phone-icon');
const callbackForm = document.getElementById('callback-form');
const closeButton = document.getElementById('close-button');

phoneIcon.addEventListener('click', () => {
    callbackForm.classList.remove('hidden');
});

callbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phone-number').value;
});

closeButton.addEventListener('click', () => {
    callbackForm.classList.add('hidden');
});

const scrollToTopButton = document.getElementById('scroll-to-top');

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    scrollToTopButton.classList.add('animated');
    setTimeout(() => {
        scrollToTopButton.classList.remove('animated');
    }, 500);
});

let priceLabel = document.getElementById('price-label');

function updatePriceLabel() {
    const currentValue = document.getElementById('price-range').value;
    priceLabel.textContent = '$' + currentValue;
}

updatePriceLabel();

const productCards = document.querySelectorAll('.card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8, .card9');
const applyButton = document.getElementById('apply-button');

productCards.forEach(card => {
    card.classList.add('visible');
});

applyButton.addEventListener('click', () => {
    const currentValue = parseInt(document.getElementById('price-range').value);
    productCards.forEach(card => {
        card.classList.remove('visible');
        const price = parseFloat(card.querySelector('.dollar').textContent.replace('$', ''));
        if (price >= currentValue && price <= 100) {
            card.classList.add('visible');
        }
    });
});

const products = [
    { name: 'Apples', price: 50.00, image: 'https://i.ibb.co/LrLmpqB/9846d7967af7adf2bdbb2b63ab471238.jpg' },
    { name: 'Bananas', price: 20.00, image: 'https://i.ibb.co/vY72Gr6/1694e5132f9297a102f515bc5e5b74ec.jpg' },
    { name: 'Carrot', price: 50.00, image: 'https://i.ibb.co/xXfrJV1/c66c04d407f153bebf6ee51520e309f9.jpg' },
    { name: 'Garlic', price: 20.00, image: 'https://i.ibb.co/qp9CZwZ/518232e6103dca3e15ea26ee403346b9.jpg' },
    { name: 'Grapes', price: 100.00, image: 'https://i.ibb.co/N1vCNTN/145b0e8246f1f34fac6729e7fd52a07e.jpg' },
    { name: 'Lettuce', price: 30.00, image: 'https://i.ibb.co/h9W12rM/55e89492860a4a6f89a0bd2b221630fe.jpg' },
    { name: 'Onions', price: 20.00, image: 'https://i.ibb.co/CtQykXv/bedd52a8d0504170b14939dd44a5f9e4.jpg' },
    { name: 'Potatos', price: 30.00, image: 'https://i.ibb.co/58HkY8n/2bf68a89da7ff5d51056e1ae5dbbc7a6.jpg' },
    { name: 'Red Grapes', price: 100.00, image: 'https://i.ibb.co/Dt3H53G/94c085d133bdc4eb40467681c7a0fca1.jpg' }
];

const cards = document.querySelectorAll('.card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8, .card9');
