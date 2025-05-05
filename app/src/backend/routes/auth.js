
const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  res.json({ status: 'registered' });
});

router.post('/verify', (req, res) => {
  res.json({ status: 'verified' });
});

module.exports = router;
