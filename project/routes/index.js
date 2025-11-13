var express = require('express');
var router = express.Router();
router.all('/*', (req, res, next) => {
    res.locals.layout = 'home'; // layout mặc định cho admin
    next();
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('partials/home/index', { title: 'Express' });
});
router.get('/blog_details', function(req, res, next) {
    res.render('blog/blog_details');
});
router.get('/blog', function(req, res, next) {
    res.render('blog/blog');
});
router.get('/anime_details', function(req, res, next) {
    res.render('blog/anime_details');
});
router.get('/anime_watching', function(req, res, next) {
    res.render('blog/anime_watching');
});
router.get('/error', function(req, res, next) {
    res.render('blog/error');
});
router.get('/categories', function(req, res, next) {
    res.render('partials/home/categories');
});
router.get('/login', function(req, res, next) {
    res.render('layouts/login');
});
router.get('/signup', function(req, res, next) {
    res.render('layouts/signup');
});
router.get('/customer', function(req, res, next) {
    res.render('blog/customer');
});
router.get('/test', function(req, res, next) {
    res.render('blog/test');
});

module.exports = router;
