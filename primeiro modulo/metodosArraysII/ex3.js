const infos = [
  {
    nome: "Scort",
    marca: "Fiat",
    ano: 2000,
    cor: "Prata"
  },
  {
    "nome": "Golf",
    "marca": "Volkswagen",
    "ano": 2019,
    "cor": "Azul"
  },
  {
    "nome": "Mustang",
    "marca": "Ford",
    "ano": 1967,
    "cor": "Vermelho"
  },
  {
    "nome": "Civic",
    "marca": "Honda",
    "ano": 2022,
    "cor": "Branco"
  }
]
const encontrarDados = (nomeMarca, arrayInfos)=>{
    const procurarMarca = arrayInfos.find((objNome)=>{
      const nomeProcurado = objNome.marca;
      return nomeProcurado === nomeMarca
    })
    if(procurarMarca){
      console.log(procurarMarca)
    }else{
      console.log("Veículo não encontrado")
    }
}

encontrarDados("Honda", infos)