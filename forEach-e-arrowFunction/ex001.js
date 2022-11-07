console.log ("exercício");

// Mostre no console cada parágrado do site
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

paragrafos.forEach((item) => console.log(item));

// Mostre o texto dos parágrafos no console
// paragrafos.forEach((item) => console.log(item.innerText));


// Como corrigir os erros abaixo:
const imgs2 = document.querySelectorAll('img');

imgs.forEach((item, index) => {
  console.log(item, index);
});

let x = 0;
imgs.forEach(() => console.log(x++));

imgs.forEach(() => x++);

