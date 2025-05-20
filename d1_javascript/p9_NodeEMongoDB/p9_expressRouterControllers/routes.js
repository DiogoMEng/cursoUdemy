const express = require('express');

// ### CRIAÇÃO DO ROTA ###
const route = express.Router();

// ### FUNÇÕES DE CALLBACK ###
const homeController = require('./controllers/homeControle');
const contatoController = require('./controllers/contatoController')

// rotas de Home
route.get('/', homeController.paginaInicial);
route.post('/', homeController.trataPost);

// rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;