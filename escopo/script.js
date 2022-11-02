var carro = "Fusca";

function mostrarCarro() {
  console.log(carro);
} 

mostrarCarro(); // Fusca
console.log(carro); 

var i=10

for (let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i*12); 

const semana = "Sexta";
// semana = "Quinta"; // TypeError: Assignment to constant variable.
console.log(semana);

const data = {
  ano: 2018,
  mes: 'Dezembro'
};

data.ano = 2019;
data.dia = 25;
console.log(data);



