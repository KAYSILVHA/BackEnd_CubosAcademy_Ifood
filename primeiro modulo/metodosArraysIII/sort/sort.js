// ordena os elementos do próprio array. Por padrão, a ordenação é de acordo com a tabela unicode.

//opcionalmente, recebe uma função que possui dis parametros, sendo eles os valores a ser comparados

// é importante lembrar que, na tabela unicode, números vem antes das letras.

//ordena o original

//exemplo

const array = [2,4,1,20,3,43];
// array.sort();
array.sort((a, b) =>{
  return a-b
})


console.log(array)



//ordenacao funcao callback

// 1- se o retorno for menor que zero(negativo), o primeiro parametro vem antes do segundo
// 2- se o retorno for positivo o segundo parametro vem antes do primeiro
//se o retorno for zero, msntem o primeiro e o segundo inalterados