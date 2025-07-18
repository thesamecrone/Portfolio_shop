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

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search');

    if (searchTerm) {
        let searchResults = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        renderSearchResults(searchResults);
    } else {
        displayProducts(products); 
    }
});

function renderSearchResults(productsToDisplay) {
    const productsContainer = document.getElementById("cards-container");
    if (!productsContainer) return;
    productsContainer.innerHTML = "";

    if (productsToDisplay.length === 0) {
        productsContainer.innerHTML = `
        <p style="
            color: #878680;
            font-family: 'Manrope', sans-serif;
            font-size: 30px;
            margin-top: 10%;
            margin-left: 8%;
        ">
            No products found.
        </p>
    `;
    } else {
        productsToDisplay.forEach(product => {
            const productElement = document.createElement("div");
            productElement.classList.add("product");

            productElement.innerHTML = `
                <h5>${product.name}</h5>
                <img src="${product.image}" alt="${product.name}" />
                <p class="dollar">Price: $${product.price}</p>
            `;
            productsContainer.appendChild(productElement);
        });
    }
}

let filteredProducts = [];

function displayProducts(products) {
    const container = document.getElementById('cards-container');
    if (!container) return;
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
    const priceRange = document.getElementById('price-range');
    if (!priceRange) return;
    const currentValue = parseInt(priceRange.value || 0);
    filteredProducts = products.filter(product => product.price >= currentValue && product.price <= 100);
    console.log('Filtered Products:', filteredProducts);
    displayProducts(filteredProducts);
    return filteredProducts;
}

let sortedProducts = products.slice();

function updateSortButtons() {
    const sortAsc = document.getElementById('sort-asc');
    const sortDesc = document.getElementById('sort-desc');
    if (sortAsc) {
        sortAsc.onclick = (event) => {
            event.preventDefault();
            sortProductsAsc(sortedProducts);
        };
    }
    if (sortDesc) {
        sortDesc.onclick = (event) => {
            event.preventDefault();
            sortProductsDesc(sortedProducts);
        };
    }
    return sortedProducts;
}

const applyButton = document.getElementById('apply-button');
if (applyButton) {
    applyButton.addEventListener('click', () => {
        applyFilter();
        updateSortButtons();
    });
}

const sortAscButton = document.getElementById('sort-asc');
const sortDescButton = document.getElementById('sort-desc');
if (sortAscButton) {
    sortAscButton.addEventListener('click', (event) => {
        event.preventDefault();
        sortProductsAsc(filteredProducts);
    });
}
if (sortDescButton) {
    sortDescButton.addEventListener('click', (event) => {
        event.preventDefault();
        sortProductsDesc(filteredProducts);
    });
}

function sortProductsAsc(productsToSort) {
    const sortedProducts = productsToSort.slice().sort((a, b) => a.price - b.price);
    displayProducts(sortedProducts);
    const sortButton = document.getElementById('sort-button');
    if (sortButton) {
        sortButton.innerHTML = 'Price: Low to High <img src="https://thesamecrone.github.io/Portfolio_shop/portfolio/images/9.Shop/image.png" alt="pic">';
    }
}

function sortProductsDesc(productsToSort) {
    const sortedProducts = productsToSort.slice().sort((a, b) => b.price - a.price);
    displayProducts(sortedProducts);
    const sortButton = document.getElementById('sort-button');
    if (sortButton) {
        sortButton.innerHTML = 'Price: High to Low <img src="https://thesamecrone.github.io/Portfolio_shop/portfolio/images/9.Shop/image.png" alt="pic">';
    }
}

let priceLabel = document.getElementById('price-label');

function updatePriceLabel() {
    const priceRange = document.getElementById('price-range');
    if (priceRange) {
        const currentValue = priceRange.value;
        priceLabel.textContent = '$' + currentValue + ' - $100';
    }
}

if (document.getElementById('price-range')) {
    updatePriceLabel();
    document.getElementById('price-range').addEventListener('input', updatePriceLabel);
}

displayProducts(products);
updateSortButtons();