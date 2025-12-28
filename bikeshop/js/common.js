// translation

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,ru' },
        'google_translate_element'
    );
}

function setLang(lang) {
    const select = document.querySelector("select.goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
    }
}

let currentLang = "en";

const langButton = document.querySelector(".lang .en");
const langText = langButton.querySelector("p");
const langImg = langButton.querySelector("img");

const flagEN = "https://thesamecrone.github.io/Portfolio_shop/bikeshop/images/Mask group (1).png";
const flagRU = "https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg";

langButton.addEventListener("click", () => {
    if (currentLang === "en") {
        setLang("ru");
        currentLang = "ru";
        langText.textContent = "RU";
        langImg.src = flagRU;
        langImg.style.width = "14px";
        langImg.style.height = "18px";
    } else {
        setLang("en");
        currentLang = "en";
        langText.textContent = "EN";
        langImg.src = flagEN;
        langImg.style.width = "14px";
        langImg.style.height = "18px";
    }
});

// modal window 

const loginBtn = document.getElementById("loginBtn");
const modal = document.getElementById("loginModal");
const closeModal = document.getElementById("closeModal");

loginBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

// scrollToTop

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

// navbar

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});


// subscription

const form = document.querySelector('.field');
const emailInput = document.querySelector('.entermail');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    if(!email) {
        alert('Please enter your email');
        return;
    }

    try {
        const res = await fetch('https://velorettibackend-production.up.railway.app/api/subscribe', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({ email }),
            credentials: 'include'
        });

        const data = await res.json();

        if(res.ok) {
            alert("Subscribed successfully");
            emailInput.value = "";
        } else {
            alert(data.error || "Subscription failed");
        }
    } 

    catch (err) {
        console.error(err);
        alert("Something went wrong");
    }
});
