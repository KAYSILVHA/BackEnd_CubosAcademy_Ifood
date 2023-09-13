//a)
const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
frutas.reverse()
console.log(frutas)




//b)
frutas.reverse();
console.log(frutas)
//remover primeiro
frutas.splice(0,1)
console.log(frutas)
//remover ultimo e adicionar melão
frutas.splice(frutas.length-1,1,"Melão")
console.log(frutas)