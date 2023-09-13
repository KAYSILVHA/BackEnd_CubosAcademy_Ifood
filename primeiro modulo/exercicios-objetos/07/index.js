let numero;

const livro = {
  nome: 'O poder do hábito',
  capitulos: [
      {
          nome: "O loop do hábito",
          numero
      },
      {
          nome: "O cérebro ansioso",
          numero
      },
      {
          nome: "A regra de ouro da mudança de hábito",
          numero
      },
      {
          nome: "Hábitos angulares, ou a balada de Paul O`neill",
          numero
      },
      {
          nome: "Starbucks e o hábito do sucesso",
          numero
      },
      {
          nome: "O poder de uma crise",
          numero
      },
      {
          nome: "Como a target sabe o que você quer antes que você saiba",
          numero
      },
      {
          nome: "A Saddleback Church e o boicote aos ônibus de Montgomery",
          numero
      },
      {
          nome: "A neorologia do livre-arbítrio",
          numero
      },
  ]
}

for(let i = 0; i< livro.capitulos.length; i++){
    livro.capitulos[i].numero = i+1;
}

console.log(livro)