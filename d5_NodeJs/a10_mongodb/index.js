const express = require("express");
const exphbr = require("express-handlebars");
const conn = require("./db/conn.js");
const productsRoutes = require("./routes/products.router.js");

const app = express();

app.engine('handlebars', exphbr.engine());
app.set('view engine', 'handlebars');

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());
app.use(express.static("public"));

app.use("/products", productsRoutes);

app.listen(3000)