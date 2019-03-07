var express = require('express');
var router = express.Router();
const budgeter = require('./budgeter')

router.get('/', function (req, res, next) {
  res.status(200).json({
    message: 'success'
  })
});

router.post('/budget', function (req, res, next) {
  const req_json = req.body
  var budget = budgeter.getBudget(req_json)
  res.status(201).json({
    message: 'success',
    object: budget
  })
});


module.exports = router;
