document.getElementById("search-icon").addEventListener("click", function () {
    document.getElementById("search-input").focus();
    document.getElementById("search-form").classList.toggle("show");
});

//search input trial
const searchInput = document.getElementById("search-input");
document.getElementById("search-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы

    const query = searchInput.value.trim().toLowerCase();
    if (query) {
        // Перенаправляем на страницу shop с параметром в URL
        window.location.href = `html/7.Shop.html?search=${encodeURIComponent(query)}`;
    }
});


//end
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