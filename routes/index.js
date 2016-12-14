var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('site/index', {
    info: {
      title: 'Express',
      author: 'shuoshubao',
      age: 25,
      sex: '男',
      job: 'fe',
      company: 'Lianjia'
    }
  });
});

module.exports = router;
