function solucao(lista) {
  const valorReduce = lista.reduce((acumulador, elementoAtual) =>{
  return acumulador + elementoAtual
});

console.log(valorReduce)

}
solucao([10,20,30])