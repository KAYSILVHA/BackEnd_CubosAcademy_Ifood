const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui
const valorNecessarioParaPagarIr = 28559.70//reais

if(aposentada === true){
  console.log('ISENTA')
  if(totalDeRendimentos <= valorNecessarioParaPagarIr){
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
  }
}else if(portadoraDeDoenca === true){
  console.log('ISENTA')
  if(totalDeRendimentos <= valorNecessarioParaPagarIr){
    console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
  }
}else if(totalDeRendimentos <= valorNecessarioParaPagarIr){
  console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE')
}else{
  console.log('PAGA LEAO')
}