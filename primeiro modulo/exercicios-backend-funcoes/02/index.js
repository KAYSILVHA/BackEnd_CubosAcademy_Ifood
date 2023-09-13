let carro = {
  ligado: false,
  velocidade: 0,
  ligar: function(){
    if(carro.ligado === true){
      console.log("Este carro já está ligado!")
    }else{
      carro.ligado = true
      console.log(`Carro Ligado. Velocidade: ${this.velocidade}`)
    }
  },
  desligar: function(){
    if(carro.ligado === false){
      console.log("Este carro já está desligado!")
    }else{
      carro.ligado = false
      carro.velocidade = 0
      console.log(`Carro Desligado. Velocidade: ${this.velocidade}`)
    }
  },
  acelerar: function(){
    if(this.ligado === true){
      this.velocidade = carro.velocidade+10
      console.log(`Carro Ligado. Velocidade: ${this.velocidade}`)
    }else{
      console.log("Não é possível acelerar um carro desligado.")
    }
  },
  desacelerar: function(){
    if(this.ligado === true){
      this.velocidade = carro.velocidade-10
  console.log(`Carro Ligado. Velocidade: ${this.velocidade}`)
    }else{
      console.log("Não é possível desacelerar um carro desligado.")
    }
  }
}


carro.desligar();
carro.ligar();
carro.ligar();
carro.acelerar();
carro.acelerar();
carro.desacelerar();
carro.desligar();
carro.acelerar();
carro.desacelerar();