//criar a função
let indexNome;
function atendimentoPaciente(pacientesNomes, tipoDeOperacao, nomePaciente){
  for (const nome of pacientesNomes) {
      if(tipoDeOperacao === "atender"){
      if(nome === nomePaciente){
        indexNome = pacientesNomes.indexOf(nome)
        pacientesNomes.splice(0,0,nomePaciente)
        console.log(pacientesNomes)
      }else{
        pacientesNomes.splice(pacientesNomes.length, 0, nomePaciente)
        console.log(pacientesNomes)
      }
      }
    }
}
atendimentoPaciente(['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'], "atender", "Joana")

