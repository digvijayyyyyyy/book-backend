const Book = require('../models/Book')

const controller = async (req,res) => {
    const {body} = req
    const book = await Book.create({
        name: body.name,
        about: body.about,
        yearOfRelease: body.yearOfRelease,
        author: body.author,
        description: body.description,
        avatarURL: body.avatarURL
    })
    res.send(book)
}

module.exports = controller