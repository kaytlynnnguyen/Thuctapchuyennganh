var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/anime_watching', function(req, res, next) {
    res.render('anime_watching');
});

module.exports = router;