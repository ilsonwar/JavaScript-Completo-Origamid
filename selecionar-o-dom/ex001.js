console.log('Exercício');
// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imgImagem = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imgImagem);

// Selecione todos os links internos (onde o href começa com #)
const links= document.querySelectorAll('[href^="#"]');
console.log(links);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2AnimaisDescricao = document.querySelector('.animais-descricao h2');
console.log(h2AnimaisDescricao);

// Selecione o último p do site
const p = document.querySelectorAll('p');
console.log(p[p.length - 1]);
