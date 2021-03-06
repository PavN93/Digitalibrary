const router = require('express').Router();


router.get('/books', (req, res) => {
  console.log('get books endpoint hit');
  res.json({ message: 'here are saved books' });
});

router.post('/books', (req, res) => {
  console.log('save record endpoint hit');
  res.json({ message: 'book saved' });
});

router.delete('/books/:id', (req, res) => {
  console.log('delete record endpoint hit');
  res.json({ message: 'record has been deleted' });
});



module.exports = router;