
const sessionCounter = document.querySelector('.session-counter');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');
const settingsButton = document.querySelector('.settings-button');
const workSessionInput = document.querySelector('#work-session');
const shortBreakInput = document.querySelector('#short-break');
const longBreakInput = document.querySelector('#long-break');
const settings = document.querySelector('.settings');

let timer;
let isRunning = false;
let mode = 'work';
let sessionCount = 0;
let workSessionDuration = parseInt(workSessionInput.value);
let shortBreakDuration = parseInt(shortBreakInput.value);
let longBreakDuration = parseInt(longBreakInput.value);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      let minutes = parseInt(minutesDisplay.textContent);
      let seconds = parseInt(secondsDisplay.textContent);

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          isRunning = false;
          if (mode === 'work') {
            sessionCount++;
            sessionCounter.textContent = `Session ${sessionCount}`;
            if (sessionCount % 4 === 0) {
              mode = 'long-break';
              minutesDisplay.textContent = longBreakDuration < 10 ? `0${longBreakDuration}` : longBreakDuration;
              secondsDisplay.textContent = '00';
            } else {
              mode = 'short-break';
              minutesDisplay.textContent = shortBreakDuration < 10 ? `0${shortBreakDuration}` : shortBreakDuration;
              secondsDisplay.textContent = '00';
            }
          } else {
            mode = 'work';
            minutesDisplay.textContent = workSessionDuration < 10 ? `0${workSessionDuration}` : workSessionDuration;
            secondsDisplay.textContent = '00';
          }
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  mode = 'work';
  sessionCount = 0;
  sessionCounter.textContent = 'Session 0';
  minutesDisplay.textContent = workSessionDuration < 10 ? `0${workSessionDuration}` : workSessionDuration;
  secondsDisplay.textContent = '00';
}

workSessionInput.addEventListener('change', () => {
  workSessionDuration = parseInt(workSessionInput.value);
  minutesDisplay.textContent = workSessionDuration < 10 ? `0${workSessionDuration}` : workSessionDuration;
});

shortBreakInput.addEventListener('change', () => {
  shortBreakDuration = parseInt(shortBreakInput.value);
});

longBreakInput.addEventListener('change', () => {
  longBreakDuration = parseInt(longBreakInput.value);
});

settingsButton.addEventListener('click', () => {
  const settings = document.querySelector('.settings');
  settings.style.display = settings.style.display === 'none' ? 'block' : 'none';
});


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);




/*
const sessionCounter = document.querySelector('.session-counter');
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
const startButton = document.querySelector('.start-button');
const stopButton = document.querySelector('.stop-button');
const resetButton = document.querySelector('.reset-button');

let timer;
let isRunning = false;
let mode = 'work';
let sessionCount = 0;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      let minutes = parseInt(minutesDisplay.textContent);
      let seconds = parseInt(secondsDisplay.textContent);

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          isRunning = false;
          if (mode === 'work') {
            sessionCount++;
            sessionCounter.textContent = `Session ${sessionCount}`;
            if (sessionCount % 4 === 0) {
              mode = 'long-break';
              minutesDisplay.textContent = '15';
              secondsDisplay.textContent = '00';
            } else {
              mode = 'short-break';
              minutesDisplay.textContent = '05';
              secondsDisplay.textContent = '00';
            }
          } else {
            mode = 'work';
            minutesDisplay.textContent = '25';
            secondsDisplay.textContent = '00';
          }
        } else {
          minutes--;
          seconds = 59;
        }
      } else {
        seconds--;
      }

      minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  mode = 'work';
  sessionCount = 0;
  sessionCounter.textContent = '';
  minutesDisplay.textContent = '25';
  secondsDisplay.textContent = '00';
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

*/