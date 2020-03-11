const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const routes = require('./routes')

mongoose.connect('mongodb://localhost:27017/books-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const port = 3015;
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false}))

app.use(bodyParser.json())

app.use(routes);

app.listen(port, () => {
    console.log(`App running on ${port}`)
})