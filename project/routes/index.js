var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/index', { title: 'Express' });
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
router.get('/categories', function(req, res, next) {
    res.render('partials/home/categories');
});
router.get('/login', function(req, res, next) {
    res.render('layouts/login');
});
router.get('/signup', function(req, res, next) {
    res.render('layouts/signup');
});
router.get('/admin', function(req, res, next) {
    res.render('layouts/admin');
});
module.exports = router;
