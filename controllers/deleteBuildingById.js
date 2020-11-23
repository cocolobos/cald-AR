const { response } = require('express');
const express = require ('express');
const router = express.Router();
const buldings = require('../data/buldings-data.json');

router.delete('/:id', (req,res) => {
    const found = buldings.some(buld => buld.id === parseInt(req.params.id));
    if (found) {
        res.json(buldings.filter(buld => buld.id !== parseInt(req.params.id)));
    } else {
        res.status(404).json({msg:'ID not found'});
    }
    });

module.exports = router;