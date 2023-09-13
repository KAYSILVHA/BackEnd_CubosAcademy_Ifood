const numeros = [8, 11, 4, 1];
let subtracao = 0;
let resultadoSubtracao =[]
for(let i = 0; i<numeros.length; i++){
  for (const numero of numeros) {
    subtracao = numeros[i] - numero
    resultadoSubtracao.push(subtracao)
  }
}
let maior = resultadoSubtracao[0]

for (const numero of resultadoSubtracao) {
  if(numero > maior){
    maior = numero
  }
}

console.log(maior)