let populacaoInicialInfectada = 1000
let qntPessoasQueOPacientPodeInfectar = 4
let tempoPercorrido = 7

let pessoasInfectadasAposOTempo = populacaoInicialInfectada * qntPessoasQueOPacientPodeInfectar**(tempoPercorrido/7)

console.log(`A quantidade de infectados após ${tempoPercorrido} dias é de ${pessoasInfectadasAposOTempo} pessoas.`)
