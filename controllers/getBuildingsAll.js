const express = require ('express');
const router = express.Router();
const buldings = require('../data/buldings-data.json');

router.get('/', (req,res) => {res.json(buldings);});

module.exports = router;