// Добавляем прослушку на всем окне
window.addEventListener("click", function (event) {

  // Обьявляем переменую для счетчика
  let counter;

  // Проверяем клик строго по кнопкам Плюс или Минус
  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    // Находим обёртку счетчика
    const counterWrapper = event.target.closest(".counter-wrapper");
    // находим див с числом счетчика
    counter = counterWrapper.querySelector("[data-counter]");
  }

  // Проверяем являеца ли элемент кнопкой plus
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  // Проверяем являеца ли элемент кнопкой minus
  if (event.target.dataset.action === "minus") {
    const counterWrapper = event.target.closest(".counter-wrapper");

    const counter = counterWrapper.querySelector("[data-counter]");
    // проверяем  чтобы счетчик быд больше 0
    if (parseInt(counter.innerText) > 0) {
      counter.innerText = --counter.innerText;
      // Проверка на товар который находиться в корзине
    } else if (event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 0 ) {
      // Удаляем товар из корзины
      event.target.closest('.cart-item').remove();
    }     
  }
})