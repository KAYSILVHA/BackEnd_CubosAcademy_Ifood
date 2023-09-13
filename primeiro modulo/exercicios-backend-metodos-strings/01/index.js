const comentario = "Esse covid é muito perigoso!";
if(comentario.includes("COVID") === true || comentario.includes("PANDEMIA")===true|| comentario.includes("covid")===true|| comentario.includes("pandemia")===true){
  console.log("Comentário bloqueado por conter palavras proibidas")
}else{
  console.log("Comentário autorizado.")
}