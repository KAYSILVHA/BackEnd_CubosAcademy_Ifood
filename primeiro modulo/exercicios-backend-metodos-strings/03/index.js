const texto = "Aprenda programar do zero na Cubos Academy";
const arrayTexto = texto.split(" ");
let urlAmigavel = "";
let ultimoCaracter;
for (const palavra of arrayTexto) {
  let primeiraLetra = palavra.slice(0,1);
  let resto = palavra.slice(1)
  urlAmigavel += primeiraLetra.toLowerCase() + resto + "-";
  ultimoCaracter = urlAmigavel.slice(-1)
}
console.log(urlAmigavel.trim());

