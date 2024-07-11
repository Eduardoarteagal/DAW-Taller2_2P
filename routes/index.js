var express = require('express');
var router = express.Router();
const fotosController = require('../controllers/fotos');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
router.get('/findAll/json', fotosController.findAllJson);


module.exports = router;
