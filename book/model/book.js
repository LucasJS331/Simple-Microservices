const mongoose = require("mongoose");
const Book = new mongoose.Schema({
    title: String,
    author: String,
    publisher: String,
    numberPages: Number
})

module.exports = Book;