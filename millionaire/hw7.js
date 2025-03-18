const button = document.querySelector('.button button');
const timerInput = document.getElementById('timerInput');
const startTimerButton = document.getElementById('startTimer');
const timerDisplay = document.getElementById('timerDisplay');
const startStopwatchButton = document.getElementById('startStopwatch');
const stopStopwatchButton = document.getElementById('stopStopwatch');
const stopwatchDisplay = document.getElementById('stopwatchDisplay');

let timerInterval, stopwatchInterval;
let stopwatchTime = 0;

function moveButton() {
    button.style.position = 'absolute';
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

button.addEventListener('mouseover', () => {
    if (Math.random() > 0.5) {
        moveButton();
    }
});

button.addEventListener('click', () => {
    moveButton();
});

startTimerButton.addEventListener('click', () => {
    clearInterval(timerInterval);
    let time = parseInt(timerInput.value);
    
    if (!isNaN(time) && time > 0) {
        timerDisplay.textContent = formatTime(time);
        timerInterval = setInterval(() => {
            if (--time < 0) {
                clearInterval(timerInterval);
                alert("Time's up!");
            } else {
                timerDisplay.textContent = formatTime(time);
            }
        }, 1000);
    }
});

startStopwatchButton.addEventListener('click', () => {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(() => {
        stopwatchDisplay.textContent = formatTime(++stopwatchTime, true);
    }, 1000);
});

stopStopwatchButton.addEventListener('click', () => clearInterval(stopwatchInterval));

function formatTime(seconds, isStopwatch = false) {
    if (isStopwatch) {
        const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${hours}:${minutes}:${secs}`;
    } else {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${minutes}:${secs}`;
    }
}
