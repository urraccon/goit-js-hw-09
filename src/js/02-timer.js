// console.log(new Date().toString());

// import flatpickr from 'flatpickr';
// import 'flatpickr/dist/flatpickr.min.css';
const startBtn = document.querySelector('[data-start]');
const countdownDays = document.querySelector('[data-days]');
const countdownHours = document.querySelector('[data-hours]');
const countdownMinutes = document.querySelector('[data-minutes]');
const countdownSeconds = document.querySelector('[data-seconds]');
const now = new Date();
let selectedTime = '';
let remainingTime = '';

// console.dir(startBtn);
console.dir(countdownDays);

startBtn.disabled = true;

const selectorOptions = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedTimeArray) {
    console.log(selectedTimeArray[0]);
    selectedTime = selectedTimeArray[0];
    checkTime(selectedTime);
  },
};

const createTimeSelector = flatpickr('#datetime-picker', selectorOptions);

function checkTime(time) {
  if (time < now) {
    window.alert(`Please choose a date in the future`);
  } else {
    startBtn.disabled = false;
  }
}

startBtn.addEventListener('click', startCountdown());

function startCountdown() {
  debugger;
  const countDownID = setInterval(countDown(), 1000);
}

function countDown() {
  remainingTime = selectedTime - now;
  console.log(remainingTime);
  if (remainingTime !== 0) {
    remainingTime = remainingTime - 1000;
    displayRemainingTime(remainingTime);
  } else {
    clearInterval(countDownID);
  }
}

function displayRemainingTime(time) {
  const { days, hours, minutes, seconds } = convertMs(time);
  countdownDays.textContent = days;
  countdownHours.textContent = hours;
  countdownMinutes.textContent = minutes;
  countdownSeconds.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
