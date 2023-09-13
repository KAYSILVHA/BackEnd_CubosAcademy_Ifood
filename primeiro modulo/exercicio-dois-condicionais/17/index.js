//valor do produto comprado.
let valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

//transformar o valor do produto em reais
  valorDoProduto/=100

//preciso capturar o valor do produto comprado e subtrair o valor que foi pago
  precoASerPago = valorDoProduto - valorPago

//dividir o valor restante pelo tanto de parcelas escolhidas
  precoASerPago/=quantidadeDoParcelamento

//depos ver o valor de cada parcela
precoCadaParecela = valorDoProduto/quantidadeDoParcelamento

if (precoASerPago <= 0) {
  numerosDeParecelas = 0
} else {
  numerosDeParecelas = quantidadeDoParcelamento - (valorPago / (valorDoProduto / quantidadeDoParcelamento))
  console.log(`Restam ${numerosDeParecelas} parcelas de R$${precoCadaParecela}`)
}