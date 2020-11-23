const express = require ('express');
const app = express();
const technicians = require ('../data/technicians-data.json');

//GET ALL TECHNICIANS
app.get('/technicians', (req, res) => res.json(technicians))

//GET TECHNICIANS BY ID
app.get('/technicians/:id', (req, res) => {
    const found = technicians.some(tech => tech.id === parseInt(req.params.id));
    if(found){
        res.json(technicians.filter(tech => tech.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: "No technician was found"})
    }
})
//DELETE TECHNICIANS
app.delete('/technicians/:id', (req,res) => {
    const found = technicians.some(tech => tech.id === parseInt(req.params.id));
    if(found){
        res.json(technicians.filter(tech => tech.id !== parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:"Technician not found"})
    }
})
//GET TECHNICIANS BY ATTRIBUTE
app.get('/technicians/:attribute/:value', (req, res) => {
    const parseValue = isNaN(parseInt(req.params.value))? req.params.value : parseInt(req.params.value);
    const found = technicians.some(tech => tech[req.params.attribute] === parseValue);
    if(found){
        res.json(technicians.filter(tech => tech[req.params.attribute] === parseValue));
    }else{
        res.status(400).json({msg:"Technician not found"})
    }
})
module.exports = app;
