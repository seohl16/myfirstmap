var express = require('express');
var router = express.Router();

const request = require('request');
const cheerio = require('cheerio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

// request(url, function(error, response, body){
//   console.log(body)
// });