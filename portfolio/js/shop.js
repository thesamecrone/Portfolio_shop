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
    callbackForm.style.display = 'block';
});

callbackForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phone-number').value;
});

closeButton.addEventListener('click', () => {
    callbackForm.style.display = 'none';
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
    priceLabel.textContent = '$' + currentValue + ' - $100';
}

updatePriceLabel();

document.getElementById('price-range').addEventListener('input', updatePriceLabel);

let products = [
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

let filteredProducts = [];

function displayProducts(products) {
    const container = document.getElementById('cards-container');
    container.innerHTML = '';

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product">
    <h5>${product.name}</h5>
    <p class="dollar">$${product.price.toFixed(2)}</p>
`;

        container.appendChild(card);
    });
}

function applyFilter() {
    const currentValue = parseInt(document.getElementById('price-range').value);
    filteredProducts = products.filter(product => product.price >= currentValue && product.price <= 100);
    console.log('Filtered Products:', filteredProducts);
    displayProducts(filteredProducts);
    return filteredProducts;
}

let sortedProducts = products.slice();

function updateSortButtons() {
    document.getElementById('sort-asc').onclick = (event) => {
        event.preventDefault();
        sortProductsAsc(sortedProducts);
    };

    document.getElementById('sort-desc').onclick = (event) => {
        event.preventDefault();
        sortProductsDesc(sortedProducts);
    };
    return sortedProducts;
}

document.getElementById('apply-button').addEventListener('click', () => {
    applyFilter();
    updateSortButtons();
});

document.getElementById('sort-asc').addEventListener('click', (event) => {
    event.preventDefault();
    sortProductsAsc(filteredProducts);
});

document.getElementById('sort-desc').addEventListener('click', (event) => {
    event.preventDefault();
    sortProductsDesc(filteredProducts);
});

function sortProductsAsc(productsToSort) {
    const sortedProducts = productsToSort.slice().sort((a, b) => a.price - b.price);
    displayProducts(sortedProducts);
    document.getElementById('sort-button').innerHTML = 'Price: Low to High <img src="/portfolio/images/9.Shop/image.png" alt="pic">';
}

function sortProductsDesc(productsToSort) {
    const sortedProducts = productsToSort.slice().sort((a, b) => b.price - a.price);
    displayProducts(sortedProducts);
    document.getElementById('sort-button').innerHTML = 'Price: High to Low <img src="/portfolio/images/9.Shop/image.png" alt="pic">';
}

displayProducts(products);
updateSortButtons(products);
