const display = document.querySelector(".displayit");
const startButton1 = document.querySelector(".starting-button");
const stopButton1 = document.querySelector(".stopping-button");
const resetButton1 = document.querySelector(".reseting-button");

let startTime;
let intervalId;

function start() {
  startTime = Date.now() - (intervalId || 0);
  intervalId = setInterval(() => {
    const elapsedTime = Date.now() - startTime;
    
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const milliseconds = Math.floor((elapsedTime % 1000) / 10);
    display.textContent = `${hours
      .toString()
      .padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}:${milliseconds.toString().padStart(2, "0")}`;
  }, 10);
}

function stop() {
  clearInterval(intervalId);
  intervalId = null;
}

function reset() {
  clearInterval(intervalId);
  intervalId = null;
  display.textContent = "00:00:00:00";
}

startButton1.addEventListener("click", start);
stopButton1.addEventListener("click", stop);
resetButton1.addEventListener("click", reset);
