const express = require('express');

const path = require('path');
const userRouter = require('./routers/users');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'src');

// ### POSSIBILITA A LEITURA DO CORPO DA REQUISIÇÃO ###
app.use(express.urlencoded({

    extended: true

}));

app.use(express.json());

// ### ARQUIVOS ESTÁTICOS ###
app.use(express.static(path.resolve(__dirname, 'public')));

// ### ROTA DE USUÁRIOS ###
app.use('/users', userRouter); 

// ### ROTA PRINCIPAL ###
app.get('/', (req, res) => {

    res.sendFile(`${basePath}/html/index.html`);

});

app.use(function(req, res, next) {

    res.status(404).sendFile(`${basePath}/html/404.html`)

});


app.listen(port, () => {

    console.log(`http://localhost:${port}`);

});