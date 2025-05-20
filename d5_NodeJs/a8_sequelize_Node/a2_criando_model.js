const express = require('express');
const exphbs = require('express-handlebars');
const connection = require('./db/connection');

const User = require('./models/User');

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

// ### APLICAÇÃO SOMENTE EXECUTA COM A CRIAÇÃO DAS TABELAS ###
connection.sync().then(() => {

    app.listen(3000, () => {
        console.log('http://localhost:3000');
    });

}).catch(err => console.log(err));

