const value = document.querySelector("#value");
const minusBtn = document.querySelector('[data-action="decrement"]');
const plusBtn = document.querySelector('[data-action="increment"]');
let counterValue = 0;
minusBtn.addEventListener("click", function () {
  counterValue -= 1;
  value.textContent = counterValue;
});
plusBtn.addEventListener("click", function () {
  counterValue += 1;
  value.textContent = counterValue;
});
