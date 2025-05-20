const express = require('express');

const app = express();
const port = 3000;

// MÉTODO GET - VERBO HTTP RESPONSÁVEL POR MOSTRAR ALGO AO USUÁRIO.
app.get('/', (req, res) => {

    // REQUISIÇÃO - RECEBE OS DADOS

    // RESPOSTA - ENVIADA AO USUÁRIO
    res.send('Resposta');

});

app.listen(port, () => {

    console.log(`http://localhost:${port}`);

});