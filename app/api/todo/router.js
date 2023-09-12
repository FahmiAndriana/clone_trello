const express = require('express');
const router = express.Router();
const {getAll, create, getOne, update, destroy} = require('../todo/controller');
const {validateUpdate,validateCreate,validateOne} = require('../todo/validation');

/* GET home page. */
router.get('/todos', getAll);
router.post('/todos',validateCreate, create);
router.get('/todos-findOne/:id', getOne);
router.put('/todos/:id', update);
router.delete('/todos/:id', destroy);

module.exports = router;
