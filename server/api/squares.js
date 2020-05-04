const express = require('express');
const router = express.Router();
const {Square} = require('../db/models');

router.get('/', async (req, res, next) => {
  try {
    const squares = await Square.findAll();
    res.json(squares);
  } 
  catch (error) {
    next(error);
  }
})

router.post('/', async (req, res, next) => {
  try {
    const [newSquare, created] = await Square.findOrCreate({where: {content: req.body.content}});
    if (created) res.sendStatus(201);
    else res.sendStatus(409);
  } 
  catch (error) {
    next(error);
  }
})

module.exports = router;