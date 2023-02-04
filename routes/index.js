var express = require('express');
var router = express.Router();
let db = require('../db')
let apis = require('../api')

/* GET home page. */
router.get('/', async function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.get('/get-data', async function(req, res, next) {
  let doe = await apis.getData()
   console.log('doe', doe)
});

module.exports = router;
