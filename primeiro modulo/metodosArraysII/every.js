//testa se todos os elementps do array  passam pelo teste implementado na função callback passada como argumento e retorna true or false


const numeros =[1,2,3,4];

numeros.every((elementoAtual)=>{  
  console.log(elementoAtual<5)
})
