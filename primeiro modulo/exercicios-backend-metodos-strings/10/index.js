const nomeArquivo = 'Foto da Familia.pdf';
const index = nomeArquivo.lastIndexOf(".")
const palavraArray = nomeArquivo.split(".")

let palavra = palavraArray[1]

if(palavra ==="jpg" || palavra ==="jpeg" || palavra ==="gif" || palavra === "png"){
  console.log("Arquivo válido")
}else{
  console.log("Arquivo inválido")
};

