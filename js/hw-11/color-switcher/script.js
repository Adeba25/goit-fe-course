const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548"
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]')
};

const backgroundChanger = () => {
  const arrayIndex = randomIntegerFromInterval(0, colors.length - 1);
  const selectedColor = colors[arrayIndex];
  document.body.style.backgroundColor = selectedColor;
};

let changer;

function startBgChange() {
  refs.startBtn.disabled = true;
  changer = setInterval(() => backgroundChanger(), 1000);
}

function stopBgChange() {
  refs.startBtn.disabled = false;
  clearInterval(changer);
}

refs.startBtn.addEventListener("click", startBgChange);
refs.stopBtn.addEventListener("click", stopBgChange);
