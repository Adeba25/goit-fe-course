const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

let counterValue = 0;

function increment() {
  counterValue += 1;
}

function decrement() {
  counterValue -= 1;
}

counter.addEventListener("click", function(event) {
  const action = event.target.getAttribute("data-action");

  if (action === "increment") {
    increment();
  } else if (action === "decrement") {
    decrement();
  }

  value.textContent = counterValue;
});
