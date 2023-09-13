const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"]

const verificarProduto = (produtos)=>{
  const resultado = produtos.some((produto)=>{
    const verificarSeExiste = produto === "cerveja" || produto === "vodka"
    return verificarSeExiste
  })
  if(resultado){
    console.log("revise sua lista, joão. possui bebida com venda proibida!")
  }else{
    console.log("vamos às compras!")
  }

}

verificarProduto(palavras)