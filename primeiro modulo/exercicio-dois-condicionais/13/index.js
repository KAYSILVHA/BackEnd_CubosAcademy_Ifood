//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
let valorDoProduto = 13000;

if(tipoDePagamento === "credito"){
  valorDoProduto /=100
  let valorFinal = valorDoProduto - (valorDoProduto*0.05)
  console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}else if(tipoDePagamento === "cheque"){
  valorDoProduto /=100
  let valorFinal = valorDoProduto - (valorDoProduto*0.03)
  console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}else if(tipoDePagamento === "debito" || tipoDePagamento === "dinheiro"){
  valorDoProduto /=100
  let valorFinal = valorDoProduto - (valorDoProduto*0.1)
  console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}