var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/index.html', function(req, res, next) {
  res.render('index');
});
router.get('/inbox.html', function(req, res, next) {
  res.render('inbox');
});
router.get('/compose.html', function(req, res, next) {
  res.render('compose');
});
router.get('/validation.html', function(req, res, next) {
  res.render('validation');
});
router.get('/forms.html', function(req, res, next) {
  res.render('forms');
});
router.get('/graphs.html', function(req, res, next) {
  res.render('graphs');
});
router.get('/basic_tables.html', function(req, res, next) {
  res.render('basic_tables');
});
router.get('/login.html', function(req, res, next) {
  res.render('login',{layout:'layout2'});
});


module.exports = router;
