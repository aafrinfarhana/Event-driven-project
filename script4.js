let timer;

document.getElementById("startBtn").addEventListener("click", function () {
  let time = document.getElementById("inputTime").value;
  let display = document.getElementById("display");

  if (time === "" || time <= 0) {
    display.innerText = "Invalid Time";
    return;
  }

  clearInterval(timer);
  display.innerText = time;

  timer = setInterval(function () {
    time--;
    display.innerText = time;

    if (time == 0) {
      clearInterval(timer);
      display.innerText = "Time's Up!";
    }
  }, 1000);
});
