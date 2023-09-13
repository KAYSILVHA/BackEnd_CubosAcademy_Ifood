//reverse()

// const numeros = [1,2,3,4,5];
// const resultado = numeros.reverse();

// console.log("Original:",numeros)
// console.log("Resultado:",resultado)

// resultado.pop();
// console.log(numeros)


//exercicio 1

// function inverter(texto){
//   let arraysDeLetras = texto.split("");
//   arraysDeLetras.reverse();

//   let resultadoFinal ="";
//   for (const letra of arraysDeLetras) {
//     resultadoFinal+=letra;
//   }
//   console.log(resultadoFinal)
// }

// inverter("Olá, tudo bem?")


//join()

// function inverter(texto){
//   let arraysDeLetras = texto.split("");
//   arraysDeLetras.reverse();
//   let textoInvertido = arraysDeLetras.join("");
//   console.log(textoInvertido)
// }

// inverter("Olá, tudo bem?")


//slice()

//Math.ceil = arredonda pra cima
//Math.floor = arredonda para baixo
//Math.round: arredonda para o mais proximo

// function aproveitamentoDeDados(dados){
//   let startIndex = Math.round(dados.length*10/100);
//   let endIndex = Math.round(dados.length*90/100);
//   let cortarDados = dados.slice(startIndex, endIndex)
//   console.log(cortarDados)
// }


// aproveitamentoDeDados([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])


//splice()

let array = ["a","b","c","d", "e"];
array.splice(1,2,"f");
console.log(array)


array = ["a","b","c","d", "e"];
array.splice(1,2,"f","g","h");
console.log(array)


array = ["a","b","c","d", "e"];
array.splice(1,0,"f");
console.log(array)


//push
array = ["a","b","c","d", "e"]; 
array.splice(array.length,0,"f");
console.log(array)
//pop
array = ["a","b","c","d", "e"];
array.splice(array.length-1,1);
console.log(array)
//shift
array = ["a","b","c","d", "e"];
array.splice(0,1);
console.log(array)
//unshift
array = ["a","b","c","d", "e"];
array.splice(0,1,"f");
console.log(array)