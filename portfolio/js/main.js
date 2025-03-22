document.getElementById("search-icon").addEventListener("click", function () {
    document.getElementById("search-input").focus();
    document.getElementById("search-form").classList.toggle("show");
});

document.getElementById("search-input").addEventListener("input", function () {
    let searchTerm = this.value.trim().toLowerCase(); // Получаем строку поиска, убираем лишние пробелы и делаем строчными

    if (searchTerm) {
        // Перенаправляем на страницу shop с параметром поиска в URL
        window.location.href = `Shop.html?search=${encodeURIComponent(searchTerm)}`;
    }
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