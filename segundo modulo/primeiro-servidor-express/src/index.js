const express = require('express');


const app = express();

app.get('/home',(requisicao, resposta)=>{
  resposta.send('Esta é minha rota principal')
});

app.get('/array',(requisicao, resposta)=>{
  const array = [1,2,3,4,5];
  resposta.send(array)
});

app.listen(3000)