// retorna o primeiro index do elemento corresponde ao que se pediu na função callback usada
//caso não ache retorna -1


//exemplo

const carros = [
  {
    nome: "Scort",
    marca: "Fiat",
    ano: 2000,
    cor: "Prata"
  },
  {
    "nome": "Golf",
    "marca": "Volkswagen",
    "ano": 2019,
    "cor": "Azul"
  },
  {
    "nome": "Mustang",
    "marca": "Ford",
    "ano": 1967,
    "cor": "Vermelho"
  },
  {
    "nome": "Civic",
    "marca": "Honda",
    "ano": 2022,
    "cor": "Branco"
  }
]


const resultados = carros.findIndex((carro)=>{
  return carro.nome === 'Civic';
})

console.log(resultados)