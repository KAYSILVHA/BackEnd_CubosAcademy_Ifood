let valorTotal = 129.99
let valorQuePossuo = 80

let valorDoDesconto = valorTotal - valorQuePossuo

let valorDoDescontoEmPorcentagem = (valorDoDesconto * 100)/ valorTotal


console.log(`Se você possui R$${valorQuePossuo} e o que quer comprar custa R$${valorTotal}, você precisará de um desconto de R$${valorDoDesconto.toFixed(2)} ou ${valorDoDescontoEmPorcentagem.toFixed(1)}%.`)