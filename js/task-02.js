const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
// // Option #1
// const ingredientsList = document.querySelector("#ingredients");
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// ingredientsList.innerHTML = markup;

// Option #2
const ingredientsList = document.querySelector("#ingredients");
ingredients.forEach((ingredient) => {
  const ingredientItem = document.createElement("li");
  ingredientItem.textContent = `${ingredient}`;
  ingredientItem.classList.add("item");
  ingredientsList.append(ingredientItem);
});
