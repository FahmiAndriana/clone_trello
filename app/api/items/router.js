const express = require('express');
const router = express.Router();
const {move, create, getOne, update, destroy} = require('../items/controller');

/* GET home page. */
// router.get('/items', getAll);
router.post('/items', create);
router.get('/items-findOne/:id', getOne);
router.put('/items/:id', update);

router.delete('/items/:id', destroy);

module.exports = router;
