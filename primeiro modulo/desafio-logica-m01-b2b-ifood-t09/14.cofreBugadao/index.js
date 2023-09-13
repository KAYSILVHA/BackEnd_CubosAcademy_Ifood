function processData(input) {
  const linhas = input.trim().split("\n");
const senhaCorreta = linhas[0];
  const palavraDigitada = linhas[1];
  
  let indiceSenha = 0;
  let indicePalavra = 0;
  
  while (indicePalavra < palavraDigitada.length) {

      if (senhaCorreta[indiceSenha] === palavraDigitada[indicePalavra]) {
          indiceSenha++;
      }
      indicePalavra++;
      
      if (indiceSenha === senhaCorreta.length) {
          console.log("SIM");
          return;
      }
  }
  console.log("NAO");
} 
