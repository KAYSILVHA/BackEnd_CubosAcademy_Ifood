function solucao(lista) {
  const media = lista.reduce((acumulador, elementoAtual) =>{
    return acumulador + elementoAtual
});

console.log(media/lista.length)
  
}

solucao([1,2,3])
