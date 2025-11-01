var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/shop', function(req, res, next) {
    res.render('shop', );
});
// goi trang index
module.exports = router;
