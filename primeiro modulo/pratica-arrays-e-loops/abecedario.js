let palavras = ['Mamão', 'Maçã', 'Melão', 'Melância', 'Laranja']
let categoria = 'fruta';
let letra = 'M';

let erros = 0;

for (const palavra of palavras) {
    const primeiraLetra = palavra[0];
    if(primeiraLetra !== letra){
      erros++
  }
}

console.log(erros)