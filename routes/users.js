var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.post('/', function (req, res) {
  res.send('Got a POST request');
});


module.exports = router;
