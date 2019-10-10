let input;
const numbers = [];
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  numbers.push(+input);
  console.log(numbers);
}

for (const number of numbers) {
  total += number;
}

console.log(total);