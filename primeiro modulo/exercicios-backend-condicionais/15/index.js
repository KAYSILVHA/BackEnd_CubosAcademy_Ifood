const primeiroNome = "Minato";
const sobrenome = "Namikase";
const apelido = "Minatinho";


if(apelido){
  console.log(`${apelido}`)
  if(primeiroNome && !sobrenome && !apelido){
    console.log(`${primeiroNome}`)
  }else if(primeiroNome && sobrenome && !apelido){
    console.log(`${primeiroNome} ${sobrenome}`)
  }
}else if(primeiroNome && !sobrenome && !apelido){
  console.log(`${primeiroNome}`)
}else if(primeiroNome && sobrenome && !apelido){
  console.log(`${primeiroNome} ${sobrenome}`)
}