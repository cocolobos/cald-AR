const express = require ('express');
const app = express();
const tech = require ('../data/technicians-data.json');

//GET ALL TECHNICIANS
app.get('/technicians', (req, res) => res.json(tech))

//GET TECHNICIANS BY ID
app.get('/technicians/:id', (req, res) => {
    const found = tech.some(tech => tech.id === parseInt(req.params.id));
    if(found){
        res.json(tech.filter(tech => tech.id === parseInt(req.params.id)));
    }else{
        res.status(400).json({msg: "No technician was found"})
    }
})
//DELETE TECHNICIANS
app.delete('/Technicians/:id', (req,res) => {
    const found = tech.some(tech => tech.id === parseInt(req.params.id));
    if(found){
        res.json({msg:"Technician deleted"})
    }else{
        res.status(400).json({msg:"Technician not found"})
    }
})
