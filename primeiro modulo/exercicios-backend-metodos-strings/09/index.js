const nome = 'Kayra Silva Cardoso';

let newNickName = "";
let letrasMinusculas;

for (const letra of nome) {
  letrasMinusculas = letra.toLowerCase();
  newNickName+=letrasMinusculas.trim()
}
console.log("@"+newNickName.slice(0,12))