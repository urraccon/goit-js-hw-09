// console.log(new Date().toString());

import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const startBtn = document.querySelector('[data-start]');
const countdownDays = document.querySelector('[data-days]');
const countdownHours = document.querySelector('[data-hours]');
const countdownMinutes = document.querySelector('[data-minutes]');
const countdownSeconds = document.querySelector('[data-seconds]');
const now = new Date();
let selectedTime = '';
let remainingTime = '';
let isActive = false;
let countdownID = '';

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

flatpickr('#datetime-picker', selectorOptions);

function checkTime(time) {
  if (time < now) {
    window.alert(`Please choose a date in the future`);
  } else {
    startBtn.disabled = false;
  }
}

startBtn.addEventListener('click', () => startCountdown());

function startCountdown() {
  if (isActive !== true) {
    // debugger;
    remainingTime = selectedTime - now;
    countdownID = setInterval(() => countDown(), 1000);
    // return countDownID;
    isActive = true;
    // console.log(startCountdown());
    startBtn.disabled = true;
  } else {
    clearInterval(countdownID);
    isActive = false;
    startCountdown();
  }
}

function countDown() {
  // console.log(remainingTime);
  if (remainingTime > 1000) {
    remainingTime = remainingTime - 1000;
    displayRemainingTime(remainingTime);
    // console.log(remainingTime);
  } else {
    clearInterval(countdownID);
  }
}

function displayRemainingTime(time) {
  let { days, hours, minutes, seconds } = convertMs(time);
  // console.log({ days, hours, minutes, seconds });
  if (days < 10) {
    // console.log(days);
    days = addLeadingZero(days);
    // console.log(addLeadingZero(days));
  }
  if (hours < 10) {
    // console.log(hours);
    hours = addLeadingZero(hours);
    // console.log(addLeadingZero(hours));
  }
  if (minutes < 10) {
    // console.log(minutes);
    minutes = addLeadingZero(minutes);
    // console.log(addLeadingZero(minutes));
  }
  if (seconds < 10) {
    // console.log(seconds);
    seconds = addLeadingZero(seconds);
    // console.log(addLeadingZero(seconds));
  }
  countdownDays.textContent = days;
  countdownHours.textContent = hours;
  countdownMinutes.textContent = minutes;
  countdownSeconds.textContent = seconds;
  // console.log(countdownDays.TextContent);
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

function addLeadingZero(number) {
  return `${number}`.padStart(2, '0');
}
