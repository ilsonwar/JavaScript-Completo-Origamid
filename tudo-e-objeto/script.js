var nome = "Ilson";

var nomeMinusculo = nome.toLowerCase();

var btn = document.querySelector(".btn");

btn.addEventListener("click", function(){
  console.log(nomeMinusculo);
});

