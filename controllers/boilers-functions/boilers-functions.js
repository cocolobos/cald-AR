const express = require ('express');
const app = express();
const boilers = require('../data/boilers-data.json')

// Gets all boilers
app.get('/Boilers', (req, res) => res.json(boilers))

//Get Boiler By Id
app.get('/Boilers/:id', (req, res) => {
    const found = boilers.some(boilers => boilers.id === parseInt(req.params.id)); 
    if(found){
        res.json(boilers.filter(boilers => boilers.id === parseInt(req.params.id)));
    } else{
        res.status(400).json({ msg: `No members with the id of ${req.params.id}`})
    }
})

//Get Boiler By Type Id
app.get('/Type/:typeId', (req, res) => {
    const found = boilers.some(boilers => boilers.typeId === parseInt(req.params.typeId)); 
    if(found){
        res.json(boilers.filter(boilers => boilers.typeId === parseInt(req.params.typeId)));
    } else{
        res.status(400).json({ msg: `No members with the stock: ${req.params.typeId}`})
    }
})

//Delete a boiler
app.delete('/:id', (req, res) => {
    const found = boilers.some(boilers => boilers.id === parseInt(req.params.id)); 
    if(found){
        res.json({ msg: `member ${req.params.id} deleted`, boilers: boilers.filter(boilers => boilers.id !== parseInt(req.params.id))});
    } else{
        res.status(400).json({ msg: `No members with the id of ${req.params.id}`})
    }
})

const PORT = process.env.PORT || 5000
app.listen (PORT, () => console.log("hi"));