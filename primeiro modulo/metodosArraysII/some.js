//testa se pelo menos um dos elementos passa no teste
//se passar ele retorna true


//exemplo

// const nomes = ["joao", "maria", "jose", "rodrigo"]


// const resultado = nomes.some((nome) =>{
//   return nome === "joao"
// })


// console.log(resultado)


const numeros = [1,2,4,6]

const resultado = numeros.some((numero)=>{
  return numero%2===0;
})
console.log(resultado)