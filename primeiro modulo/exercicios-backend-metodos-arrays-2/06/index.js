const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
]


const resultado = cidades.map((cidade)=>{
  if(cidade.length<=8){
      return cidade
  }
}).filter((cidade)=>{
  return cidade!==undefined
})

console.log(resultado)