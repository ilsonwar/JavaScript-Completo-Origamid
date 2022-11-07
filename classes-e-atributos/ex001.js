console.log('atividades');
// Adicione a classe ativo a todos os itens do menu
const menuEx = document.querySelectorAll('.menu a');
menuEx.forEach((item) => {
  item.classList.add('ativo');
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
menuEx.forEach((item) => {
  item.classList.remove('ativo');
});
menuEx[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgEx = document.querySelectorAll('img');
imgEx.forEach((item) => {
  const possuiAlt = item.hasAttribute('alt');
  console.log(item, possuiAlt);
});

// Modifique o href do link externo no menu
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.google.com.br');
console.log(link);



