var possuiGraduacao = true;
var possuiDoutorado = false;

if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiGraduacao) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação');
}
// retorna Possui Graduação, mas não possui doutorado

var nome = 'André';

if(nome){
  console.log(nome);
} else {
  console.log('nome nao existe ')
}

if(!possuiGraduacao){
  console.log('Não possui graduação');
}

if((5-5) && (5+5)){
  console.log('Verdadeiro');
}else{
  console.log('Falso');
}

var condicional = (5-10) && (5+5)
if(condicional){
  console.log('Verdadeiro', condicional);
}else{
  console.log('Falso');
}

// Operador || ou

var condicional2 = (5-5 )||(5+5) || (10-2);
console.log(condicional2);

//operador switch

var corDFavorita = 'Vermelho';
switch(corDFavorita){
case 'Azul':
  console.log('Olhe para o céu');
  break;
  case 'Amarelo':
    console.log('Olhe para o sol');
    break;
    case 'Vermelho':
      console.log('Olhe para as rosas');
      break;
      default:
        console.log('Feche os olhos');
}