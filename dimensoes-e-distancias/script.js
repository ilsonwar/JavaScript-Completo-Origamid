const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const hleft = primeiroh2.offsetTop;

const h2rect = primeiroh2.getBoundingClientRect();
console.log(h2rect);

if (h2rect.top < 0) {
  console.log('passou do elemento');
}

//pegar tamanho da janela

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset,
);

const small = window.matchMedia('(max-width: 600px)').matches;
if (small) {
  console.log('Tela pequena');
}else if (small) {
  console.log('Tela grande');
}