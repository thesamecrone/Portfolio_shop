document.getElementById("search-icon").addEventListener("click", function () {
    document.getElementById("search-input").focus();
    document.getElementById("search-form").classList.toggle("show");
});

//search input trial
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");

    // Проверяем, существует ли поле ввода на странице
    if (!searchInput) {
        console.log("Поле ввода не найдено на этой странице");
        return;
    }

    // Обработчик нажатия Enter
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Предотвращаем отправку формы, если она активна
            console.log("Enter нажат!"); // Для отладки

            const query = searchInput.value.trim().toLowerCase();
            if (query) {
                window.location.href = `https://thesamecrone.github.io/Portfolio_shop/portfolio/html/7.Shop.html?search=${encodeURIComponent(query)}`;
                searchInput.value = "";
            } else {
                console.log("Поле поиска пустое");
            }
        }
    });
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