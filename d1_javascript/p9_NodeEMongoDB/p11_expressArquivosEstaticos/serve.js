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

// conteudo estático
app.use(express.static(path.resolve(__dirname, 'public')));

// informando caminho absoluto
app.set('views', path.resolve(__dirname, 'src', 'views'));

// escolhe engine de view
app.set('view engine', 'ejs')

app.use(routes);

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});