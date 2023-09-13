//executa a função callback, passada como argumento, para cada elemento do array, que resulta em apenas um valor de retorno

//essa funcao recebe 4 argumentos

// 1- acumulador - valor inicial (o o valor do callback anterior)
// 2 -valorAtual - o valor do elemenmto atual
// 3- o indice atual
// 4- o array completo

const array = [0, 1, 2, 3, 4]
//somando tudo com for
// let somaTotal = array[0];
// for(let i = 1; i< array.length; i++){
//   const elementoAtual = array[i];
//   somaTotal+=elementoAtual
// }

// console.log(somaTotal)


const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) =>{
  return acumulador + elementoAtual
});

console.log(valorReduce)


const valorReduce2 = array.reduce((acumulador, elementoAtual, indice, array) =>{
  return acumulador + elementoAtual
}, 10);

console.log(valorReduce2)