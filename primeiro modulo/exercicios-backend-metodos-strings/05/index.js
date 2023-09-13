const numeroCartao = '1111222233334444';

const primeiros4Digitos = numeroCartao.slice(0,4)
const numerosEscondidos = numeroCartao.slice(4,12)

const ultimos4Digitos = numeroCartao.slice(12,16)

console.log(primeiros4Digitos +"********"+ ultimos4Digitos)