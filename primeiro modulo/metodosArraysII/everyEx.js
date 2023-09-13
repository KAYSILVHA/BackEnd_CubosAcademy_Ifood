// const frutas = ["abacaxi","manga", "melancia"]
// const resutado = frutas.every((fruta)=>{  
//   return fruta!=="banana"
// })

// console.log(resutado)


const usuarios = [
  {
    nome: "Rwayan Makkena",
    idade: 20
  },
  {
    nome: "Kadu Makkena",
    idade: 18
    
  },
  {
    nome: "Kairara",
    idade: 18
    
  },
];



const verificarIdade = (arrayObjeto)=>{
  const resultado = arrayObjeto.every((objeto)=>{
    return objeto.idade > 17
  })
  if(resultado){
    console.log("Festa Liberada")
  }else{
    console.log("Possui menor de idade")
  }
}

verificarIdade(usuarios)
