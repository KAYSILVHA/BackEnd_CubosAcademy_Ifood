const numeros = [54, 22, 14, 284];
 let achou = false

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 10) {
    achou = true
      let posicao = i
      console.log(posicao)
      break;
  }
}
if(!achou){
  console.log(-1)
}
