function solucao(min, max, valores) {
  const valoresAutorizados = valores.filter((valor) =>{
    if(valor >= min && valor<= max){
      return valor
    }
  });
    console.log(valoresAutorizados);
}

solucao(2, 10, [0, 5, 6, 10, 11])