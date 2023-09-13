const idade = 13;
const possuiPatologia = false;
const altura = 150;
const ehEstudante = false;

if(idade < 12 || idade > 65 || possuiPatologia === true || altura < 150){
  console.log('ACESSO NEGADO')
}else{
  if(ehEstudante===true){
  console.log('10 reais')
}else if(ehEstudante==false){
  console.log('20 reais')
}
}