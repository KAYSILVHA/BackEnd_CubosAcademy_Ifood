function solucao(jogadores) {
  const diferente = jogadores.filter((jogadorDiferente) => {
    return jogadorDiferente.jogada==1
  })
  if (diferente.length === 1) {
      console.log(diferente[0].nome)
  } else {
    const igualAZero = jogadores.filter((jogador) => {
      return jogador.jogada === 0;
    });

    if (igualAZero.length === 1) {
      console.log(igualAZero[0].nome);
    } else {
      console.log("NINGUEM");
    }
  }



}
solucao([
  {
    "nome": "Herman",
    "jogada": 1
  },
  {
    "nome": "Rhodes",
    "jogada": 0
  },
  {
    "nome": "Beach",
    "jogada": 0
  },
  {
    "nome": "Laurel",
    "jogada": 0
  },
  {
    "nome": "Beatrice",
    "jogada": 0
  },
  {
    "nome": "Alison",
    "jogada": 0
  },
  {
    "nome": "Saundra",
    "jogada": 0
  },
  {
    "nome": "Klein",
    "jogada": 0
  }
])
