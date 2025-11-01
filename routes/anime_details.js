var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/anime_details', function(req, res, next) {
    res.render('anime_details');
});

module.exports = router;