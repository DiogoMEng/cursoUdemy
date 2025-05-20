const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// ### SETUP PARA UTILIZAÇÃO DO HANDLEBARS NO PROJETO ###
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {

    // ### RENDERIZANDO O VIEW HOME ###
    res.render('home');

});

app.listen(3000, () => {

    console.log('http://localhost:3000')

})