let fraseCorrompida = "*Canis %lupus )familiaris"

let dadoPurificado = ''
for (const caractere of fraseCorrompida) {
  if(caractere === "!" || caractere ==="@" || caractere ==="@"|| caractere ==="#"||caractere ==="%" || caractere ==="*" || caractere ==="{" || caractere ==="}" || caractere ===")" || caractere ==="("){
  }else{
    dadoPurificado = dadoPurificado + caractere
  }
}

console.log(dadoPurificado)
