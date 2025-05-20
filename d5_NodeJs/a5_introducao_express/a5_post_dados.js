const express = require('express');

const path = require('path');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'src');

// ### POSSIBILITA A LEITURA DO CORPO DA REQUISIÇÃO ###
app.use(express.urlencoded({

    extended: true

}));

app.use(express.json());

app.get('/users/create', (req, res) => {

    res.sendFile(`${basePath}/html/userForm.html`);

});

app.post('/users/save', (req, res) => {

    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`O nome do usuário é ${name} e ele tem ${age} anos`);

    res.sendFile(`${basePath}/html/userForm.html`);

});

app.get('/users/:id', (req, res) => {

    const id = req.params.id;

    console.log(`usuário: ${id}`);

    res.sendFile(`${basePath}/html/users.html`);

});

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/html/index.html`);

});


app.listen(port, () => {

    console.log(`http://localhost:${port}`);

});