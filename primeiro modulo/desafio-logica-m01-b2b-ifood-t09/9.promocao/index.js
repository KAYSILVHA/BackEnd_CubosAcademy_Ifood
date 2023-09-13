function solucao(precos) {
  let soma = 0;
  if(precos.length>=3){
    let menor = precos[0]
    let desconto = 0;
    for (const preco of precos) {
      soma +=preco
      if(menor> preco){
        menor = preco
        desconto = menor/2
      }else if(menor===preco){
        menor = preco
        desconto = menor/2
      }
    }
    console.log(soma-desconto)
  }else{
    for (const preco of precos) {
      soma+=preco
    } 
    console.log(soma)
  }
  
}

solucao([100, 100, 100, 150])