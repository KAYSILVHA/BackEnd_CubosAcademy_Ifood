
// const numeros = [1, 30, 4, 6, 80, 34, 100, 256]

// numeros.sort();

// console.log(numeros)




//ordenacao crescente
// const numeros = [3, 20, 13, 50, 1, 4, 13];
// numeros.sort((primeiro,segundo)=>{
//   if(primeiro < segundo){
//     return -1
//   }
//   if(primeiro > segundo){
//     return 1
//   }
//   return 0;
// });
// console.log(numeros)

// //ordenacao decrecente
// numeros.sort((primeiro,segundo)=>{
//   if(primeiro < segundo){
//     return 1
//   }
//   if(primeiro > segundo){
//     return -1
//   }
//   return 0;
// });
// console.log(numeros)


//Exemplo de ordenação numérica com subtração

//ordenacao crescente
const numeros = [3, 20, 13, 50, 1, 4, 13];
numeros.sort((primeiro,segundo)=>{
  return primeiro - segundo;
});
console.log(numeros)

//ordenacao decrecente
numeros.sort((primeiro,segundo)=>{
  return segundo - primeiro;
});
console.log(numeros)