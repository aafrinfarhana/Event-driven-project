let time = 0;
let interval = null;

let countdown;
let totalSeconds = 0;
let isRunning = false;

function startTimer() {
    if (isRunning) return;

    const hours = parseInt(document.getElementById("inputHours").value) || 0;
    const minutes = parseInt(document.getElementById("inputMinutes").value) || 0;
    const seconds = parseInt(document.getElementById("inputSeconds").value) || 0;

    totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
        alert("Please enter a valid time!");
        return;
    }

    isRunning = true;

    countdown = setInterval(() => {
        if (totalSeconds <= 0) {
            clearInterval(countdown);
            alert("⏰ Time's up!");
            isRunning = false;
            return;
        }

        totalSeconds--;
        updateDisplay();
    }, 1000);

    updateDisplay();
}

function pauseTimer() {
    clearInterval(countdown);
    isRunning = false;
}

function resetTimer() {
    clearInterval(countdown);
    isRunning = false;
    totalSeconds = 0;
    updateDisplay();
}

function updateDisplay() {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;

    document.getElementById("hours").textContent = String(hrs).padStart(2, '0');
    document.getElementById("minutes").textContent = String(mins).padStart(2, '0');
    document.getElementById("seconds").textContent = String(secs).padStart(2, '0');
}