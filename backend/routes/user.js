const router = require('express').Router();

router.get('/usertest', (req, res) => {
  res.send('usertest mmree');
});

router.post('/userposttest', (req, res) => {
  const username = req.body.username;
  res.send('username' + username);
});

module.exports = router;
