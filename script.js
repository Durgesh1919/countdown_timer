
let timer;
let seconds = 0;
let isTimerRunning = false;

function getRandomColor() {
    const colors = ['#45a049', '#3498db', '#e74c3c', '#9b59b6', '#2ecc71', '#f39c12', '#1abc9c', '#d35400'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.buttons button');

    buttons.forEach(button => {
        button.addEventListener('mouseover', function () {
            const newColor = getRandomColor();
            button.style.backgroundColor = newColor;
        });

        button.addEventListener('mouseout', function () {
            button.style.backgroundColor = '#4caf50'; // Reset to the original color
        });
    });
});

function startTimer() {
    if (!isTimerRunning) {
        timer = setInterval(updateTimer, 1000);
        isTimerRunning = true;
    }
}

function stopTimer() {
    clearInterval(timer);
    isTimerRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    seconds = 0;
    updateTimerDisplay();
}

function updateTimer() {
    seconds++;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
    document.getElementById('timer').innerText = formattedTime;
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}

// Initial display
updateTimerDisplay();
