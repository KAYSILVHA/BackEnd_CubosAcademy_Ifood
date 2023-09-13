//o carrossel vai de 0 a 6;
// se clicar < vai para esquerda e em > para direita;
// se estiver em 6 e clicar em > volta para 0 e vice versa;

let tamanho = carrossel.length;
let sequencia = ["<", ">", ">"]
let indice = 0;

for (const item of sequencia) {
  if (item ===">") {
    indice++;
  }else{
    indice--;
  }
  if(indice<0){
    indice = 6;
  }else if(indice > 6){
    indice = 0;
  }
}

console.log(indice)