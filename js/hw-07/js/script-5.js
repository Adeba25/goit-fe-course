const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  if (input.value !== "") {
    output.textContent = input.value;
  } else output.textContent = "незнакомец";
});
