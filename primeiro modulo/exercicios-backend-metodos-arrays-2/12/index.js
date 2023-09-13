const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];


// const filtrarMaioresDe20 = pessoas.filter((pessoa)=>{
//   return pessoa.profissao ==="Programador" || pessoa.profissao === "Programadora" && pessoa.idade > 20
// })

// console.log(filtrarMaioresDe20)


// const filtrarJornalistasComIdadeMaiorQue30 = pessoas.filter((pessoa)=>{
//   return pessoa.profissao ==="Jornalista" && pessoa.idade > 30
// })

// console.log(filtrarJornalistasComIdadeMaiorQue30)



const filtrarJovens = pessoas.filter((pessoa)=>{
  return (pessoa.idade <= 29) && (pessoa.profissao === "Jornalista" || pessoa.profissao === "Programador" || pessoa.profissao === "Programadora");
})

console.log(filtrarJovens)