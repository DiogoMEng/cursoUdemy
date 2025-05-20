const express = require('express');
const app = express();
                        //rota   params    queryStrings
                                        // chave:valor
// http://facebook.com/profiles/12345?campanha=googleads

// profiles = rota
// 12345 = parametros
// campanha=googleads = chave/valor


// ### PEGANDO VALORES DO BODY ###
app.use(express.urlencoded({
    extended: true
}));

app.get('/', (requisisao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome"/>
            <button>Enviar Formulário</button>
        </form>
    `);
});

// ### CRIANDO PARÂMETROS DE URL ###
app.get('/testes/:idUsuario?/:parametro?', (requisicao, resposta) =>{
    // parâmetros
    console.log(requisicao.params);
    // queryStrings
    console.log(requisicao.query);

    resposta.send(requisicao.params.idUsuario);
});

app.post('/', (requisicao, resposta) => {
    // recebendo valor de post
    // foi tratado na linha 13
    console.log(requisicao.body);
    resposta.send('recebi o formulário');
});

app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});