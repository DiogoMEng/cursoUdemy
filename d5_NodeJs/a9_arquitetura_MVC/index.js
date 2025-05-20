const resolve = require('path').resolve;

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/connection');

// ### MODELS ###
const Task = require('./models/Task');

// ### ROUTES ###
const tasksRoutes = require('./routes/taskRoutes');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());

app.use(express.static(resolve(__dirname, 'public')));

app.use('/tasks', tasksRoutes);

conn.sync().then(() => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
    })
}).catch((err) => console.log(err));
