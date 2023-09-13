// function solucao(numeros) {
//   const somaDosNumeros = numeros.reduce((total, numero) => total + numero, 0);
//   const posicaoDoGoleiro = somaDosNumeros % numeros.length;
//   console.log(posicaoDoGoleiro === 0 ? numeros.length : posicaoDoGoleiro);

// }
function solucao(numeros) {
  const somaDosNumeros = numeros.reduce((total, numero)=>{
    return total+numero
  })
  const posicaoDoGoleiro = somaDosNumeros % numeros.length
  let resultado;
  if(posicaoDoGoleiro===0){
    resultado = numeros.length
  }else{
    resultado = posicaoDoGoleiro;
  }
  console.log(resultado)
}

solucao([1,3,2,1])



//para contar primeiro eu devo fazer um laço que some +1 e adicione a posiçao
//depois se passar do tamanho eu devo voltar para 0