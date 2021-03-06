const mongoose = require('mongoose'); 
const {Schema} = mongoose;

const BookSchema = new Schema({
  authors: [String],
  title: String,
  description: String,
  image: String,
  link: String,
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;