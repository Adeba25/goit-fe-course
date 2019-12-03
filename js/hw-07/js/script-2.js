const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const items = document.createElement("li");
  items.textContent = ingredient;
  ingredientsList.appendChild(items);
});
