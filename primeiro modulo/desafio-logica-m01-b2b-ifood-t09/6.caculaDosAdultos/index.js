function solucao(lista) {
  const percorrerLista = lista.every((idade)=>{
    return idade < 18
  })
  if(percorrerLista){
    console.log("CRESCA E APARECA")
  }else{
    const pegarMaior = lista.filter((idade)=>{
      return idade>=18
  })
  let menor = pegarMaior[0]
  for (const idades of pegarMaior) {
    if(idades<menor){
      menor = idades
    }
  }
  console.log(menor)
}
}


solucao([18,23,21])