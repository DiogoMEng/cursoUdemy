const express = require('express');
const routes = require('./routes');
const app = express();
                        //rota   params    queryStrings
                                        // chave:valor
// http://facebook.com/profiles/12345?campanha=googleads

// profiles = rota
// 12345 = parametros
// campanha=googleads = chave/valor


// *****PEGANDO VALORES DO POST*****
app.use(express.urlencoded({
    extended: true
}));
app.use(routes);

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});