var express = require('express');
var router = express.Router();
router.all('/*', function(
    req,
    res,
    next) {
    res.app.locals.layout="admin";
    next();
})
router.get('/', function(req, res) {
    res.render('admin/index', { title: 'Admin' });
})
router.get('/product', function(req, res) {
    res.render('admin/product/product_list', { title: 'Admin' });
})


module.exports = router;