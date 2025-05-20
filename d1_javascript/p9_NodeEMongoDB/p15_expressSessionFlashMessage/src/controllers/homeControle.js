const { Cookie } = require('express-session');
const HomeModel = require('../models/HomeModel');

exports.paginaInicial = (requisicao, resposta) => {
    // Cookie user
    // console.log(requisicao.session.usuario);
    console.log(requisicao.flash('error'), requisicao.flash('success'), requisicao.flash('info'));

    resposta.render('index');
};

exports.trataPost = (requisicao, resposta) =>{
    resposta.send(requisicao.body);
};