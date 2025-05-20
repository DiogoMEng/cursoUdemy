const path = require('path');

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials"],
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c", "item d", "item e"];



    res.render("dashboard", { items });

});

app.get('/post', (req, res) => {

    const post = {
        title: 'Aprendendo NodeJs',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender NodeJs...',
        comments: 4
    };

    res.render('blogpost', { post });

});

app.get('/blog', (req, res) => {

    const posts = [
        {
            title: 'Aprendendo NodeJs',
            category: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender NodeJs...',
            comments: 4
        },
        {
            title: 'Aprendendo PHP',
            category: 'PHP',
            body: 'Este artigo vai te ajudar a aprender PHP...',
            comments: 10
        },
        {
            title: 'Aprendendo Python',
            category: 'Python',
            body: 'Este artigo vai te ajudar a aprender Python...',
            comments: 6
        }
    ];

    res.render("blog", { posts })

});

app.get('/', (req, res) => {

    const user = {

        name: 'Diogo',
        surname: 'Mello',
        age: 22

    }

    const auth = false;

    const approved = false;

    res.render('home', { user: user, auth, approved });

});

app.listen(3000, () => {

    console.log('http://localhost:3000')

})