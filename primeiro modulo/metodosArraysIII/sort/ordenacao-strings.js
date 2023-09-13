//se tudo estiver minusculo e sem acento ele ordena corretamente

// const pessoas = ['joao', 'ana', 'carlos', 'beatriz'];

// pessoas.sort();

// console.log(pessoas)

//comparar strings com o localeCompare()
//retorna um número que indica se a string de referencia vem antes, depois ou é igual a string comparada


//crecente

const pessoas = ['joao', 'ana', 'carlos', 'Beatriz'];
pessoas.sort((a, b)=>{
  return a.localeCompare(b);
});
console.log(pessoas);


//decrescente
pessoas.sort((a, b)=>{
  return b.localeCompare(a);
});
console.log(pessoas);