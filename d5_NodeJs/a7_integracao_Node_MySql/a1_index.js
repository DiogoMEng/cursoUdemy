const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const path = require('path');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {

    res.render('home');

});

// ### VARIÁVEIS DE AMBIENTE PARA CONECTAR AO BANCO ###
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodemysql'
})

// ### ESTABELECENDO CONEXÃO COM O BANCO ###
connection.connect(function (err) {

    if (err) {
        console.log(err);
    }

    app.listen(3000, () => {
        console.log('http://localhost:3000');
    });

});
