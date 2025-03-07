var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/year', (req, res) => {
  const year = new Date().getFullYear()
  res.json({ year });
});

module.exports = router;
