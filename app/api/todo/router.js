const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/todos', function(req, res, next) {
  res.json( { message: 'Hello Todos'});
  
});

module.exports = router;
