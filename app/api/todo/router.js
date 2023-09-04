const express = require('express');
const router = express.Router();
const {getAll, create, getOne, update, destroy} = require('../todo/controller');

/* GET home page. */
router.get('/todos', getAll);
router.post('/todos', create);
router.get('/todos-findOne/:id', getOne);
router.put('/todos/:id', update);
router.delete('/todos/:id', destroy);

module.exports = router;
