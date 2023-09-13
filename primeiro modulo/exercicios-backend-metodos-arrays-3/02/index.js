const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
]



const stringMaior = cidades.reduce((acumulador, valorAtual)=>{
  let maior = acumulador
  if(valorAtual.length>maior.length){
    maior = valorAtual
  }

  return maior
})

console.log(stringMaior)