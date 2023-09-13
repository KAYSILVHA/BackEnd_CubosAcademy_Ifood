
function descobrirODono(usuarios,pet){
  for (const usuario of usuarios) {
    if(usuario.pets.includes(pet)){
      return `O dono(a) do(a) ${pet} é o(a) ${usuario.nome}`
    }
  }
    return `Que pena ${pet}, não encontramos seu dono(a).`;
  }

console.log(descobrirODono([
  {
      nome: "João",
      pets: ["Max"],
  },
  {
      nome: "Ana",
      pets: ["Pingo", "Lulu"],
  },
  {
      nome: "Beatriz",
      pets: ["Lessie"],
  },
  {
      nome: "Carlos",
      pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
      nome: "Antonio",
      pets: ["Naninha"],
  },
],"Mila"))

