const productsSimilar = [
  { name: "Радар", price: 1300, quantity: 1 },
  { name: "Радар", price: 1300, quantity: 1 },
  { name: "Радар", price: 1300, quantity: 1 },
  { name: "Радар", price: 1300, quantity: 1 }
];

const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function(arr, productName) {
  let result = 0;

  for (const product of arr) {
    if (product.name === productName) {
      result += product.price * product.quantity;
    }
  }

  return result;
};

console.log(calculateTotalPrice(productsSimilar, "Радар")); // 5200

console.log(calculateTotalPrice(productsSimilar, "Дроид")); // 0

console.log(calculateTotalPrice(products, "Радар")); // 5200

console.log(calculateTotalPrice(products, "Дроид")); // 2800
