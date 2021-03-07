const router = require('express').Router();
const Book = require('../models/Book')


router.get('/books', async (req, res) => {
  try {
    const results = await Book.find();
    res.json(results);
  } catch (err) {
    res.json({ error: `Error on DB read: ${err}`});
  }
});

router.post('/books', async ({ body }, res) => {
  try {
    await Book.create(body);
    res.json({ message: 'Your book is saved!' });
  } catch (err) {
    res.json({ error: `Could not save: ${err}`});
  }
});

router.delete('/books/:id', async (req, res) => {
  try {
    await Book.deleteOne({ _id: req.params.id });
    res.json({ message: 'Book deleted' });
  } catch (err) {
    res.json({ error: `Error on delete: ${err}` });
  }
});



module.exports = router;