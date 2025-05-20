const express = require('express');
const app = express();

//         criar   ler atualizar  apagar
// CRUD - create, read, update, delete
        // post   get    put    delete

// http://meusite.com/<- get -> entregue a página /

// trata requisição
app.get('/', (requisisao, resposta) => {
    resposta.send(`
        <form action="/" method="POST">
            Nome: <input type="text" name="nome"/>
            <button>Enviar Formulário</button>
        </form>
    `);
});

app.post('/', (requisicao, resposta) => {
    resposta.send('recebi o formulário');
});

app.get('/contato', (requisisao, resposta)=>{
    resposta.send('obrigado por entrar em contato com a gente');
});

// lendo porta
app.listen(3000, () =>{
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});