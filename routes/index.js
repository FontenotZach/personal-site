
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

var urlencodedParser = bodyParser.urlencoded({ extended: false});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Zach' });
});

/* POST home page. */
router.post('/', urlencodedParser, function(req, res, next) {
  console.log(req.body)
  res.render('index-success', {data: req.body});
});


module.exports = router;
