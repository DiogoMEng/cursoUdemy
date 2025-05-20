const express = require('express');

const path = require('path');

const app = express();
const port = 3000;

const basePath = path.join(__dirname, 'src');

app.get('/', (req, res) => {

    console.log(basePath);
    res.sendFile(`${basePath}/html/index.html`);

});

app.listen(port, () => {

    console.log(`http://localhost:${port}`);

});