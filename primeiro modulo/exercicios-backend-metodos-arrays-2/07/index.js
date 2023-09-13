const enderecos = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];


const encontrarRua = (enderecosArray,cep) =>{
  const encontrarCep = enderecosArray.find((endereco)=>{
          return endereco.cep==cep
      })
      if(encontrarCep){
        return encontrarCep.rua
      }
}
const resultado = encontrarRua(enderecos, 11222333)
console.log(resultado)