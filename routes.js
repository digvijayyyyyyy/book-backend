const express = require('express');

const getBooks = require('./controllers/get-books');
const createBooks = require('./controllers/create-books');
const createAuthor = require('./controllers/create-author');

const router = express.Router();

router.get('./', (req,res) => {res.send('Hello World')})

router.get('/books', getBooks);
router.post('/book', createBooks);
router.post('/author', createAuthor);


module.exports = router;