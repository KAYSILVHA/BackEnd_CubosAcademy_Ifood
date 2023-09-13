//exemplo de includes


// const frase  = "Eu estou aprendendo a programar na Cubos Academy";

// console.log(frase.includes("Cubos", 10));



// indexOf
//saber se um email é valido
//tem que ter um @
//tem que ter pelo menos um ponto depois do @


// const email = "kay.silvha@gmail.com";
// const indexArroba = email.indexOf("@");
// const indexPonto = email.indexOf(".", indexArroba)


// if(indexPonto > indexArroba){
//   console.log("Email atende as requisições")
// }else{
//   console.log("Email não atende as requisições")
// }


//slice()

//quero obter apenas os dois digitos do estado de uma cidade

// const cidade = "Salvador-BA"
// const penultimoIndex = cidade.length-2;
// console.log(cidade.slice(penultimoIndex))


//exercicio 1

// const numero = 97.50;
// const numeroString = String(numero);
// const alteracao = numeroString.replace(".", ",");
// console.log(alteracao)


//exercicio 2

// function replaceAll(textOriginal,text, newText){
//   while (textOriginal !==textOriginal.replace(text, newText)) {
//     textOriginal = textOriginal.replace(text, newText);
//   }
//   return textOriginal;
// }

// let numero = "1,300,000"
// console.log(replaceAll(numero,",", "."))


//trim()
// const email = "  kay@gmail.com  "
// const formatado = email.trim();


// console.log(email)
// console.log(formatado)


//ex 3

// function imprimir(dia, mes, ano){

//   const diaFormatado = String(dia).padStart(2, "0")
//   const mesFormatado = `${mes}`.padStart(2, "0")
//   console.log(`${diaFormatado}/${mesFormatado}/${ano}`)
// }

// imprimir(18,1,2023)


//ex 4

const nome = "jose messias e junior"
const nomeSeparado = nome.split(" ");
let nomeCerto = "";
for (const nome of nomeSeparado) {
  let primeiraLetra = nome.slice(0,1)
  let restoNome = nome.slice(1);
  nomeCerto += primeiraLetra.toUpperCase() + restoNome + " ";
}

console.log(nomeCerto.trim())



