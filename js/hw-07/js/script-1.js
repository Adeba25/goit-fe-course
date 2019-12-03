const categories = document.querySelector("#categories");

const countCategories = categories.children.length;

console.log(`В списке ${countCategories} категории`);

const categoriesItems = categories.querySelectorAll(".item");

categoriesItems.forEach(e =>
  console.log(
    `Категория: ${e.firstElementChild.textContent}. Количество элементов: ${e.lastElementChild.children.length}`
  )
);
