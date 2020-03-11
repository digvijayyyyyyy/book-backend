const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {type: 'string', required: true},
    about: 'string',
    email: {type: 'string', required: true, unique: true},
    avatarUrl: 'string',
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
