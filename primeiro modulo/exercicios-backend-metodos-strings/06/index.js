const celular = 99918888;
const celularString = String(celular)
let ddd = celularString.slice(0,2)

if(celularString.length===11){
  let noveAMais = celularString.slice(2,3)
  let quatroNumAntes = celularString.slice(3,7)
  let quatroNumDepois = celularString.slice(7,11)
  let numeroCelular = `(${ddd}) ${noveAMais} ${quatroNumAntes}-${quatroNumDepois}`
  console.log(numeroCelular)
}else if(celularString.length === 10){
  let quatroNumAntes = celularString.slice(2,6)
  let quatroNumDepois = celularString.slice(6,10)
  let numeroCelular = `(${ddd}) 9 ${quatroNumAntes}-${quatroNumDepois}`
  console.log(numeroCelular)
}else{
  let quatroNumAntes = celularString.slice(0,4)
  let quatroNumDepois = celularString.slice(4,celularString.length)
  let numeroCelular = `9 ${quatroNumAntes}-${quatroNumDepois}`
  console.log(numeroCelular)
}