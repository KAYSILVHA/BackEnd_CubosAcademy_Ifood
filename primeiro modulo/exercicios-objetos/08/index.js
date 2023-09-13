const usuarios = [
  {
      nome: "João",
      pets: [],
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
]
let soma = 0;

for (const user of usuarios) {
    if(user.pets.length == 0){
      console.log(`Sou ${user.nome} e não tenho pets`);
    }
    else if(user.pets.length > 1){
      console.log(`Sou ${user.nome} e tenho ${user.pets.length} pets`);

    }else if(user.pets.length === 1){
      console.log(`Sou ${user.nome} e tenho 1 pet`);
    }
  }