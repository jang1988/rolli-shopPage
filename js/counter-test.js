// Находим элементы на странице
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector("[data-counter]");

// Отслеживаем клик на кнопку минус
btnMinus.addEventListener("click", function () {
  // проверяем  чтобы счетчик быд больше 0
  if (parseInt(counter.innerText) > 0) {
    counter.innerText = --counter.innerText;
  }
});

// Отслеживаем клик на кнопку плюс
btnPlus.addEventListener("click", function () {
  counter.innerText = ++counter.innerText;
});
