const express = require('express');

const path = require('path');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'src');

const checkAuth = function(req, res, next) {

    req.authStatus = true;

    if(req.authStatus){
        console.log('Usuário logado');
        next(); // envia para próxima requisição
    } else {
        console.log('Sua conta ainda não está logada, realize o login para continuar');
    }

};

// ### TODA REQUISIÇÃO ENVIADA PARA O SISTEMA VAI ATIVAR O MIDDLEWARE ###
app.use(checkAuth);

app.get('/', (req, res) => {

    console.log(basePath);
    res.sendFile(`${basePath}/html/index.html`);

});

app.listen(port, () => {

    console.log(`http://localhost:${port}`);

});