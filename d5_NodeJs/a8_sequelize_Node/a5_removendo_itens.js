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

app.get('/users/create', (req, res) => {

    res.render('addUser');

});

// ### CRIAÇÃO DE USUÁRIO ###
app.post('/users/create', async (req, res) => {

    const name = req.body.name;
    const occupation = req.body.occupation;
    let newsletter = req.body.newsletter;

    if (newsletter === "on") {
        newsletter = true;
    } else newsletter = false;

    await User.create({ name, occupation, newsletter });

    res.redirect('/');

});

// ### BUSCA DE USUÁRIO ###
app.get('/users/:id', async (req, res) => {

    const id = req.params.id;

    const user = await User.findOne({
        raw: true,
        where: {
            id: id
        }
    });

    console.log(user);

    res.render('userview', { user });

});

app.post('/users/delete/:id', async (req, res) => {

    const id = req.params.id;

    await User.destroy({ where: { id: id } });

    res.redirect('/');

});

// ### BUSCA DE USUÁRIOS ###
app.get('/', async (req, res) => {

    const user = await User.findAll({ raw: true });

    console.log(user);

    res.render('home', { users: user });

});

// ### APLICAÇÃO SOMENTE EXECUTA COM A CRIAÇÃO DAS TABELAS ###
connection.sync().then(() => {

    app.listen(3000, () => {
        console.log('http://localhost:3000');
    });

}).catch(err => console.log(err));

