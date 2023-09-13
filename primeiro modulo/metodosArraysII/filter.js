//cria um novo array com todos os elementos que correspondem
//as condições da função callback
//se ele não encontra ele retorna um array vazio

//exemplo

const numeros = [1, 4, 4, 5, 3, 1, 8]


const resultado = numeros.filter((numero) => {
  return numero ===3
})

console.log(resultado)