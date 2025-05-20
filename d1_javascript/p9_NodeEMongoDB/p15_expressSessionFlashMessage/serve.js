// ### CONFIGURAÇÃO DE VARIÁVEIS DE AMBIENTE ###
require('dotenv').config();

// ### IMPORTAÇÕES ###
const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

// ### CONEXÃO COM O BANCO ###
mongoose.connect(process.env.CONECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.emit('pronto');
}).catch(e => console.log(e));


const MyMiddleware = require('./src/middleware/middlewares');

// ### CORRIGE PROBLEMAS COM DADOS RETORNADOS DE POST ###
app.use(express.urlencoded({
    extended: true
}));

// ### ACESSO A CONTEÚDO ESTÁTICOS ###
app.use(express.static(path.resolve(__dirname, 'public')));

// ### CONFIGURAÇÕES PARA SESSÃO ###
const sessionOptions = session({
    secret: 'ccpvrtebcwgfe',
    store: MongoStore.create({ mongoUrl: process.env.CONECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOptions);

app.use(flash());

// ### VIEWS ###
app.set('views', path.resolve(__dirname, 'src', 'views'));

// ### ENGINE PARA VIEWS ###
app.set('view engine', 'ejs')

// ### MIDDLEWARES ###
app.use(MyMiddleware);

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () =>{
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});