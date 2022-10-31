function areaQuadrado(lado) {
  return lado * lado;
}


console.log(areaQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi(); // 15.7
console.log(pi());

function imc(peso, altura) {
  var imc = peso / (altura * altura);
  return imc;
}

console.log(imc(80, 1.8)); 

function corFavorita(cor) {
  if (cor === 'azul') {
    return 'Eu gosto do céu';
  } else if (cor === 'verde') {
    return 'Eu gosto de mato';
  } else {
    return 'Eu não gosto de cores';
  }
}

//////////////////

addEventListener('click', function() {
  console.log('Clicou');
});


function imc2 (peso, altura) {
  const imc = peso / altura ** 2;
  console.log(imc);
}

imc2(20,1.8); // retorna o imc
console.log(imc2(20,1.8)); // retorna o imc e undefined

function terceiraIdade (idade) {
  if (typeof idade !== 'number') {
    return 'Informe a sua idade!';
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}
console.log(terceiraIdade(60));


function faltaVisitar (paisesVisitados) {
  var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
console.log(faltaVisitar(20));


var profissao = 'Designer';
function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}
console.log(dados()); // retorna 'André, 29, Rio de Janeiro, Designer'