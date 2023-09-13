
let montante = 90000
let capitalInicial = 60000
let numeroDeMeses = 24

let CalculoTaxaDeJuros = (montante/capitalInicial)**(1/numeroDeMeses)-1
let taxaDeJuros = CalculoTaxaDeJuros * 100

console.log(`O seu financiamento de ${capitalInicial} reais teve uma taxa de juros de ${taxaDeJuros.toFixed(3)}%, pois após ${numeroDeMeses} meses você teve que pagar ${montante} reais.`)