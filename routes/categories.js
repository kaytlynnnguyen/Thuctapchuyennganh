var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/categories', function(req, res, next) {
    res.render('categories');
});

module.exports = router;