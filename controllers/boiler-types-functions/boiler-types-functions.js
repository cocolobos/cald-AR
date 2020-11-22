const express = require ('express');
const app = express();
const types = require('../data/boiler-types.json')

// Gets all boiler types
app.get('/Types', (req, res) => res.json(types))

//Get Boiler Type By Id
app.get('/Types/:id', (req, res) => {
    const found = types.some(types => types.id === parseInt(req.params.id)); 
    if(found){
        res.json(types.filter(types => types.id === parseInt(req.params.id)));
    } else{
        res.status(400).json({ msg: `No members with the id of ${req.params.id}`})
    }
})

//Get Boiler Type By Stock
app.get('/stock/:stock', (req, res) => {
    const found = types.some(types => types.stock === parseInt(req.params.stock)); 
    if(found){
        res.json(types.filter(types => types.stock === parseInt(req.params.stock)));
    } else{
        res.status(400).json({ msg: `No members with the stock: ${req.params.stock}`})
    }
})

//Delete a boiler type
app.delete('/:id', (req, res) => {
    const found = types.some(types => types.id === parseInt(req.params.id)); 
    if(found){
        res.json({ msg: `member ${req.params.id} deleted`, types: types.filter(types => types.id !== parseInt(req.params.id))});
    } else{
        res.status(400).json({ msg: `No members with the id of ${req.params.id}`})
    }
})

const PORT = process.env.PORT || 5000
app.listen (PORT, () => console.log("hi"));