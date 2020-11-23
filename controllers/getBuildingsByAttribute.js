const { response } = require('express');
const express = require ('express');
const router = express.Router();
const buldings = require('../data/buldings-data.json');

router.get('/:attribute/:value', (req,res) => {
    const foundNumber = buldings.some(buld => buld[req.params.attribute] === parseInt(req.params.value));
    const foundString = buldings.some(buld => buld[req.params.attribute] === req.params.value );
    if (foundNumber) {
        res.json(buldings.filter(buld => buld[req.params.attribute] === parseInt(req.params.value)));
        } else {
            if (foundString) {
                res.json(buldings.filter(buld => buld[req.params.attribute] === req.params.value));
            } else {
                res.status(404).json({msg:'The value or the attribute is not found'});
            }
        }
    } 
);

module.exports = router;