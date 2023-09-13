const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let letraA = [];

for (const nome of nomes) {
    if(nome[0]==="A" || nome[0]==="a"){
      letraA.push(nome)
    }
}

console.log(letraA)