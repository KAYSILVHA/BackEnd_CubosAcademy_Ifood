//funcao antivírus
const nomesArquivos = ["atutu.tat", "alalala.abat", "tutururu.bet", "trutrutru.bat"]

const verificarVirus = (arrayNomesArquivos) =>{
  const resultado = arrayNomesArquivos.some((nomes)=>{
    let index = nomes.indexOf(".")
    let descobrirVírus = nomes.slice(index);
    return descobrirVírus === ".bat";
  })
  if(resultado){
    console.log("Vírus Encontrado")
  }else{
    console.log("Nenhum vírus encontrado")
  }
}
verificarVirus(nomesArquivos);