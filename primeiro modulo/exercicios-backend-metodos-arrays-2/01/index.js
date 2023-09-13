const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];

const descobrirPosicao = (nomeLivro) => {
  const resultados = livros.findIndex((livro)=>{
    return livro === nomeLivro;
  })
  if(resultados){
    console.log(`O livro está na posição ${resultados+1}`)
  }else{
    console.log("Livro não encontrado!")
  }
}

descobrirPosicao("Dom Quixote")