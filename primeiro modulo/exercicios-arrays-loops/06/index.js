const numeros = [3, 4, 7, 8, 1, 6, 5, 10];
let soma = 0

for (const numero of numeros) {
  if(numero%2===0){
    soma+=numero
  }
}
console.log(soma)