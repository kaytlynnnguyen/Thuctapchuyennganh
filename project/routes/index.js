var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/blog_details', function(req, res, next) {
    res.render('blog_details');
});
router.get('/blog', function(req, res, next) {
    res.render('blog');
});
router.get('/anime_details', function(req, res, next) {
    res.render('anime_details');
});
router.get('/anime_watching', function(req, res, next) {
    res.render('anime_watching');
});
router.get('/categories', function(req, res, next) {
    res.render('categories');
});
router.get('/login', function(req, res, next) {
    res.render('login');
});
router.get('/signup', function(req, res, next) {
    res.render('signup');
});
module.exports = router;
