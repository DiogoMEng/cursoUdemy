const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/dashboard', (req, res) => {

    const items = ["item a", "item b", "item c", "item d", "item e"];



    res.render("dashboard", { items });

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