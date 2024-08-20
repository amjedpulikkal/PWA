var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function (req, res, next) {

const data = await fetch("https://fakestoreapi.com/products").then((res) => res.json())
 console.log(data);
  res.render('index', { title: 'Express',data });
});

module.exports = router;
