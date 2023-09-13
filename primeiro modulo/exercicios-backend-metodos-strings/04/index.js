let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";
let nomeArray = nome.split(" ");
let nomeModificado = "";
let emailModificado = email.trim()

if(identificador.length<6){
  let identificadorModificado = identificador.padStart(6, "0")
  console.log(identificadorModificado);
}

for (const nome of nomeArray) {
  let primeiraLetra = nome.slice(0,1);
  let resto = nome.slice(1);
  nomeModificado+=primeiraLetra.toUpperCase()+resto+" ";
}

console.log(nomeModificado.trim())
console.log(emailModificado)
