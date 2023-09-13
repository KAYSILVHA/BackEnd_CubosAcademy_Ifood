const prova = {
    aluno: "João",
    materia: "Português",
    valor: 10,
    questoes: [
        {
            resposta: "a",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        },
        {
            resposta: "e",
            correta: "b"
        },
        {
            resposta: "b",
            correta: "b"
        },
        {
            resposta: "c",
            correta: "c"
        }
    ]
};
const{questoes, aluno, valor} = prova;
let soma = 0;
let numQuest = 0;
let pontosCdQuest = 0;
let notaRecebida = 0;

const corrigirProva = (prova)=>{
    for (const questão of questoes) {
        numQuest++;
        if(questão.resposta === questão.correta){
            soma++;
            pontosCdQuest = valor/numQuest;
            notaRecebida = pontosCdQuest * soma;
        }
    
    console.log(`O aluno ${aluno} acertou ${soma} e obteve nota ${notaRecebida}`)
}
}

corrigirProva(prova);