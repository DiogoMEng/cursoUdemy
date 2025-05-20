const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql');

const path = require('path');

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {

    res.render('home');

});

// ### INSERE DADOS NO BANCO ###
app.post('/books/insertbook', (req, res) => {

    const title = req.body.title;
    const pageqty = req.body.pageqty;

    const sqlQuery = `INSERT INTO books(title, pageqty) VALUES('${title}', '${pageqty}')`;

    connection.query(sqlQuery, function (err) {
        if (err) console.log(err);
        res.redirect('/books');
    });

});

// ### RESGATA TODOS OS DADOS NO BANCO ###
app.get('/books', (req, res) => {

    const sqlQuery = "SELECT * FROM books";

    connection.query(sqlQuery, function (err, data) {
        if (err) console.log(err);

        const books = data;
        res.render('books', { books });
    });

});

// ### RESGATA TODOS OS DADOS ESPECÍFICOS NO BANCO ###
app.get('/book/:id', (req, res) => {

    const id = req.params.id;

    const sqlQuery = `SELECT * FROM books WHERE id = ${id}`;

    connection.query(sqlQuery, function (err, data) {
        if (err) console.log(err);

        const book = data[0];
        res.render('book', { book });
    });

});

// ### EDITA UM DADO DA BASE ###
app.get('/books/edit/:id', (req, res) => {

    const id = req.params.id;
    const sqlQuery = `SELECT * FROM books WHERE id = ${id}`;

    connection.query(sqlQuery, function (err, data) {
        if (err) console.log(err);

        const book = data[0];
        res.render('editbook', { book });
    });

});

app.post('/books/updatebook', (req, res) => {

    const id = req.body.id;
    const title = req.body.title;
    const pageqty = req.body.pageqty;
    const sqlQuery = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = '${id}'`;

    connection.query(sqlQuery, function (err, data) {
        if (err) console.log(err);

        res.redirect('/books');
    });

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
