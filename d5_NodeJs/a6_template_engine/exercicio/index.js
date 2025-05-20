// Core Module
const path = require('path');

// external module
const express = require('express');
const exphbs = require('express-handlebars');

// configuring application
const app = express();

// configuring handlebars
const hbs = exphbs.create({
    partialsDir: ['views/partials'],
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.resolve(__dirname, 'public')));

const products = [
    {
        id: 1,
        title: 'Aprendendo NodeJs',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender NodeJs...',
        price: '39,80',
        comments: 4
    },
    {
        id: 2,
        title: 'Aprendendo PHP',
        category: 'PHP',
        body: 'Este artigo vai te ajudar a aprender PHP...',
        price: '105,20',
        comments: 10
    },
    {
        id: 3,
        title: 'Aprendendo Python',
        category: 'Python',
        body: 'Este artigo vai te ajudar a aprender Python...',
        price: '203,50',
        comments: 6
    }
];

app.get('/', (req, res) => {

    res.render('home', { products });

});

app.get('/product/:id', (req, res) => {

    const product = products[parseInt(req.params.id - 1)];

    console.log(product);

    res.render('product', { product });

})

app.listen(3000, () => {
    console.log('http://localhost:3000')
});