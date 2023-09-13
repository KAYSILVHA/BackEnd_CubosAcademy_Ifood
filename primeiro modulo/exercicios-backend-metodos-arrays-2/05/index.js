const usuarios = [
  {
    nome: "André",
    idade: 29,
    habilitado: true,
  },
  {
    nome: "Marcos",
    idade: 70,
    habilitado: true,
  },
  {
    nome: "Ana",
    idade: 35,
    habilitado: true,
  },
  {
    nome: "Vinícius",
    idade: 44,
    habilitado: true,
  },
  {
    nome: "Carlos",
    idade: 17,
    habilitado: false,
  },
  {
    nome: "Maria",
    idade: 19,
    habilitado: false,
  },
];


  const pegarMaioresDeIdade = usuarios.filter((pessoas) => {
    return pessoas.idade >= 18
  }).every((objeto) => {
    const simOuNao = objeto.habilitado
    return simOuNao
  })

  if (pegarMaioresDeIdade) {
    console.log("todos passaram no teste.")
  } else {
    console.log("todos precisam estar habilitados")
  }




