// window.alert('Hello World!');

const href = window.location.href;
console.log('href: ', href);

const h1Selecionado = document.querySelector('h1');
console.log('h1Selecionado: ', h1Selecionado);

h1Selecionado.addEventListener('click', function() {
  console.log('Clicou em: ' + h1Selecionado.innerText);
});