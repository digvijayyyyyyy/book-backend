const mongoose = require('mongoose');

const Author = require('./Author');

const BookSchema = new mongoose.Schema({
    name: {type: 'string', required:true},
    description: 'string',
    yearOfRelease: {type: 'number', required: true},
    author: {type: 'ObjectId', ref: Author, required: true}
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;