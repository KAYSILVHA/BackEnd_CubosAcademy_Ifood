const cpf = "12345678900";
const cnpj = "12345678000199";

if(cpf.length===11){
  let separarPrimeiros3Numeros = cpf.slice(0,3)
  let separar3Numeros = cpf.slice(3,6)
  let separarUltimos3Numeros = cpf.slice(6,9)
  let ultimos2Numeros = cpf.slice(9,11)

  console.log(`${separarPrimeiros3Numeros}.${separar3Numeros}.${separarUltimos3Numeros}-${ultimos2Numeros}`)
}else{
  console.log("CPF Inválido")
}


if(cnpj.length===14){
  let separarPrimeiros2Numeros = cnpj.slice(0,2)
  let separar3Numeros = cnpj.slice(2,5)
  let separarUltimos3Numeros = cnpj.slice(5,8)
  let quatroNumeros = cnpj.slice(8,12)
  let doisUltimosDigitos = cnpj.slice(12,14)

  console.log(`${separarPrimeiros2Numeros}.${separar3Numeros}.${separarUltimos3Numeros}/${quatroNumeros}-${doisUltimosDigitos}`)
}else{
  console.log("CNPJ Inválido")
}