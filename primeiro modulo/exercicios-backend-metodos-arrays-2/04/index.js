const numeros = [0, 122, 4, 6, 8, 44]

const verificarPares = (arrayNumeros) =>{
  const verificar = arrayNumeros.every((numero)=>{
    return numero%2===0
  })
  if(verificar){
    console.log("array válido")
  }else{
    console.log("array inválido")
  }
}

verificarPares(numeros)