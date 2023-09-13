const jogada1 = "pedra"
const jogada2 = "pedra"

//seu código aqui

if(jogada1 =="pedra" && jogada2 == "tesoura" || jogada2 =="pedra" && jogada1 == "tesoura"){
  console.log("pedra")
}else if(jogada1 =="papel" && jogada2 == "pedra" || jogada2 =="papel" && jogada1 == "pedra"){
  console.log("papel")
}else if(jogada1 =="tesoura" && jogada2 == "papel" || jogada2 =="tesoura" && jogada1 == "papel"){
  console.log("tesoura")
}else if(jogada1 == jogada2){
  console.log("empate")
}