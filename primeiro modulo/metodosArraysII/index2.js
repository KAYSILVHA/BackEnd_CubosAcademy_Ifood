// com setInterval
//executa uma vez a cada intervalo que foi definido
// o clear interval serve para parar a execução do setInterval
// const imprimir = ()=>{
//   console.log("Olá, alunos")
//   clearInterval(interval)
// }
// const interval = setInterval(imprimir, 2000)

let number = 10;
const contador = setInterval(()=>{
  console.log(number)
  number--
  if(number === 0){
    console.log("💥💥💥💥💥💥💥💥")
    console.log("BOOOOOOOOOOOOOOOOOOOOOOOOOOOM")
    clearInterval(contador)
  }
}, 1000)