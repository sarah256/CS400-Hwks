var express = require('express');
var router = express.Router();

/* GET string. */
router.get('/', function(req, res, next) {
  res.render('get', {string: 'Hello'});
});

/* POST string. */
router.post('/', function(req, res, next) {
  const str = req.body.string;
  const len = str.length;
  res.render('post', {string: str, len: len});
});


module.exports = router;
