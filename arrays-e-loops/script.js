var nomes = ["João", "Maria", "José", "Antônio", "Miguel"];
console.log(nomes);


//pop(); Remove o último item e retorna ele
//push('Guilherme');  Adiciona ao final da array
//length;  5 Mostra a quantidade de itens

for (var i = 0; i < nomes.length; i++) {
  console.log(i + "- " + nomes[i]);
  if(nomes[i] === "José"){
    break;  // Para o loop
  }
}

console.log("---While---");
var i = 0;
while (i < 10) {
  console.log(i);
  i++;
} 
// Retorna de 0 a 9 no console

console.log("---ForEach---");
var viodeGames = ["Switch", "PS4", "XBOX", "3DS"];

viodeGames.forEach(function(item, i){
  console.log(item, i);
});