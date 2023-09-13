const original = [5, 7, 13, 17, 26, 34, 118, 245];
let numeros = []
for (const numero of original) {
  if((numero >=10 && numero<=20)|| numero>100){
    numeros.push(numero)
  }
}

console.log(numeros)