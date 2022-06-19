// Добавляем прослушку на всем окне

window.addEventListener('click', function () {

  if (event.target.dataset.action === 'plus') {
    console.log('Plus');
  }
  
  if (event.target.dataset.action === 'minus') {
    console.log('Minus');
  }
});