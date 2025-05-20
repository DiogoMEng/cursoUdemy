exports.paginaInicial = (requisicao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome"/>
            <button>Enviar Formulário</button>
        </form>
    `);
};

exports.trataPost = (requisicao, resposta) =>{
    resposta.send('nova rota de POST');
};