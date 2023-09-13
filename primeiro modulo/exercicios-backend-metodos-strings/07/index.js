const email = "jose.messias.";

let emailVerificarArroba = email.includes("@");
let pontos = 0;

for (const caracter of email) {
  pontos++;
  if(email.includes(".")===false){
    console.log("E-mail inválido");
    break;
  }else if (caracter === ".") {
      if(pontos>=1){
        if (email.slice(-1) === ".") {
          console.log("E-mail inválido");
          break;
        }else if (email.slice(0, 1) === ".") {
          console.log("E-mail inválido");
          break;
        }else{
          console.log("E-mail válido");
          break;
        }
      }else if(pontos>1){
        if (email.slice(-1) === ".") {
          console.log("E-mail inválido");
          break;
        }else if (email.slice(0, 1) === ".") {
          console.log("E-mail inválido");
        }else{
          console.log("E-mail válido");
          break;
        }
      }
    }
  }




