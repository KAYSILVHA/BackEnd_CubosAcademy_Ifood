let valores = [100, 500, 200, 50, 100];

let minValor = valores[0];
let soma = 0;
let valorComdesconto = 0;
let valorSemDesconto = 0;
let tamanho = valores.length;
  

  for (const numero of valores) {
    if(numero<minValor){
      minValor = numero;
    }
      soma += numero
      valorComdesconto = soma- minValor
    }
    if(tamanho>=5){
      console.log(valorComdesconto)
    }else{
      console.log(soma)
    }
