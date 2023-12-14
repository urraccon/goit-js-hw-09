const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let colorChange = '';

console.dir(startBtn);
console.dir(stopBtn);
console.dir(body);

startBtn.addEventListener('click', startColorChange);

function startColorChange() {
  colorChange = setInterval(color, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function color() {
  body.style.backgroundColor = getRandomHexColor();
}

stopBtn.addEventListener('click', stopColorChange);

function stopColorChange() {
  clearInterval(colorChange);
  stopBtn.disabled = true;
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
