// const letras = ["A", "a", "B", "C", "E", "e"];

// let soma = 0

// for(let i = 0; i< letras.length; i++){
//   if(letras[i]==="E"||letras[i]==="e"){
//     soma++
//     console.log(`Foram encontradas ${soma} letras "E" ou "e"`)
//     break;
//   }else{
//     console.log('Nenhuma letra "E" ou "e" foi encontrada.')
//     break;
//   }
// }


const letras = ["A", "a", "B", "C"];

let soma = 0
let encontrado = false

for(let letra of letras){
  if(letra==="E"||letra==="e"){
    encontrado = true
    soma++
  }
}

if(encontrado){
  console.log(`Foram encontradas ${soma} letras "E" ou "e"`)
}
if(!encontrado){
  console.log('Nenhuma letra "E" ou "e" foi encontrada.')
}