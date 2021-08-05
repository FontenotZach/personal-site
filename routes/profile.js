var express = require('express');
var bodyParser = require('body-parser')
var router = express.Router();

var urlencodedParser = bodyParser.urlencoded({ extended: false});

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.params.id)
  console.log(req.query)
  res.send('profile id = ' + req.params.id);
});

/* POST home page. */
router.post('/', urlencodedParser, function(req, res, next) {
  console.log(req.body)
  res.send('profile id = ' + req.params.id);
});

router.post

module.exports = router;
