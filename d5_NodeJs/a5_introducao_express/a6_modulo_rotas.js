const express = require('express');

const path = require('path');
const userRouter = require('./routers/users');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'src');

// ### POSSIBILITA A LEITURA DO CORPO DA REQUISIÇÃO ###
app.use(express.urlencoded({

    extended: true

}));

app.use(express.json());

app.use('/users', userRouter); 

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/html/index.html`);

});


app.listen(port, () => {

    console.log(`http://localhost:${port}`);

});