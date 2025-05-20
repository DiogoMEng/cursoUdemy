exports.paginaInicial = (requisicao, resposta) => {
    resposta.render('index');
};

exports.trataPost = (requisicao, resposta) =>{
    resposta.send('nova rota de POST');
};