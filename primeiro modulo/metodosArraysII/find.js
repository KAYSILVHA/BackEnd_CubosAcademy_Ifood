//retorna o primeiro elemento do array, correspondente a condição implementada na função callback, passada como argumento. caso não ache, retorna undefined



//exemplo

const users = [
  {nome: "joao", idade : 23},
  {nome: "danny", idade: 25},
  {nome: "mary", idade: 30},
  {nome: "rodrick", idade: 17}
]

const resultado = users.find((user) => {
  return user.nome === "joao"
})


console.log(resultado)