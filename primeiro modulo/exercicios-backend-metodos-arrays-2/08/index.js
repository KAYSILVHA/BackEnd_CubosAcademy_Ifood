const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"]


const refatorar = frutas.map((fruta)=>{
  const lower = fruta.toLowerCase()
  const upper = lower[0].toUpperCase()+ lower.slice(1)
  let index = frutas.indexOf(fruta)
  return `${index} - ${upper}`
}).filter((frutas)=>{
  return frutas
})

console.log(refatorar)