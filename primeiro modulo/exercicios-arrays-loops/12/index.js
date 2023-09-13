const filaDeDentro = ["Jose", "Maria", "Joao"];
const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];


while(filaDeDentro.length<5){
  let primeiroDaFila = filaDeFora.shift()
  filaDeDentro.push(primeiroDaFila)
}

console.log(filaDeDentro)
console.log(filaDeFora)