const { Cookie } = require('express-session');
const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (requisicao, resposta) => {
    resposta.render('index', {
        titulo: 'titulo página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
};

exports.trataPost = (requisicao, resposta) =>{
    resposta.send(requisicao.body);
};