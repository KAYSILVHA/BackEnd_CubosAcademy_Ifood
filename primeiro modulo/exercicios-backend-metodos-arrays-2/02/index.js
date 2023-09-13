const palavras = ["livro", "caneta", "sol", "carro", "orelha"]


const verificarPalavraInvalida = (palavras)=>{
  const resultado = palavras.some((palavra)=>{
    const tamanho = palavra.length
    return tamanho >=5
  })
  if(resultado){
    console.log("existe palavra inválida")
  }else{
    console.log("array validado")
  }

}

verificarPalavraInvalida(palavras)