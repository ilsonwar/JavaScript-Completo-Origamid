// const imgs = document.querySelectorAll('img');
// console.log(imgs);

// imgs.forEach(function(item, index, array ) {
//     console.log(item, index, array );
// });

const titulos = document.getElementsByClassName("titulo");
const titulosArray = Array.from(titulos);

// console.log(titulos);
// console.log(titulosArray);

// imgs.forEach(function(item, index, array ) {
//   //     console.log(item, index, array );
//   });

const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
    // console.log(item, index);
  // });

let i=0;
imgs.forEach(() => console.log(i++));
