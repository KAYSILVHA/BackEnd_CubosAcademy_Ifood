// function solucao(texto) {
//   let tratamentoTexto = texto.trim()
//   let numeroPalavras = 0;
//   const separarTexto = tratamentoTexto.split(" ")
//   for (let i = 0; i <= separarTexto.length; i++) {
//     numeroPalavras = i
//   }
//   console.log(numeroPalavras)
// }


function solucao(texto) {
  const tratamentoTexto = texto.trim();
  const separarTexto = tratamentoTexto.split(" ");
  const contar = separarTexto.filter((palavra)=>{
    return palavra != ""
  })
  console.log(contar.length)
}

solucao("Um texto         qualquer            ")