const router = require('express').Router();
const Book = require('../models/Book')


router.get('/books', (req, res) => {
  console.log('get books endpoint hit');
  res.json({ message: 'here are saved books' });
});

router.post('/books', async ({ body }, res) => {
  try {
    const saved = await Book.create(body);
    res.json({ saved: 'Your book is saved!' });
  } catch (err) {
    res.json({error: `Could not save: ${err}`})
  }
});

router.delete('/books/:id', (req, res) => {
  console.log('delete record endpoint hit');
  res.json({ message: 'record has been deleted' });
});



module.exports = router;