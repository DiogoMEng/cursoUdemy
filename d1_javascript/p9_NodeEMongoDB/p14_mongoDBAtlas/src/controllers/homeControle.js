const HomeModel = require('../models/HomeModel');

// criando dados
// HomeModel.create({
//     titulo: 'dados de escolas',
//     descricao: 'informação de escolas do município'
// }).then(dados => console.log(dados)).catch(e => console.log(e));

// buscando dados
HomeModel.find().then(dados => console.log(dados)).catch(e => console.log(e));

exports.paginaInicial = (requisicao, resposta) => {
    resposta.render('index');
};

exports.trataPost = (requisicao, resposta) =>{
    resposta.send(requisicao.body);
};