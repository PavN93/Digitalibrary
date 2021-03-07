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
    res.json({ saved: 'Your book is saved!' });
  } catch (err) {
    res.json({error: `Could not save: ${err}`});
  }
});

router.delete('/books/:id', (req, res) => {
  console.log('delete record endpoint hit');
  res.json({ message: 'record has been deleted' });
});



module.exports = router;