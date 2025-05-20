const path = require('path');
const express = require('express');

const app = express();
const port = 5000;

const projectsRoutes = require('./routers/projects');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use('/projects', projectsRoutes);

app.listen(port, () => {

    console.log('http://localhost:5000');

})