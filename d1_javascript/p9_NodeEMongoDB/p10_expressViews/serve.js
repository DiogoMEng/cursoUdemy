const express = require('express');
const routes = require('./routes');
const path = require('path');
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

// ### UTILIZANDO O VIEW ###
app.set('views', path.resolve(__dirname, 'src', 'views'));

// ### INFORMANDO A ENGINE DO VIEW ###
app.set('view engine', 'ejs')

app.use(routes);

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});