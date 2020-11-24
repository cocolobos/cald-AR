const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000;
const techniciansController = require ('./controllers/technicians');
app.get('/getAllTechnicians', (req, res) => {
    const technicians = techniciansController.getAllTechnicians();
    res.json(technicians);
});
app.get('/getTechnicianById/:id',(req,res) => {
    const id = req.params.id;
    const technicians = techniciansController.getTechnicianById(req.params.id);
    if(technicians){
        res.json(technicians);
    }else{
        res.send('No technician found with the Id: ' + id);
    }
});
app.get('/getTechnicianByAttribute/:attribute/:value',(req,res) => {
    const technicians = techniciansController.getTechniciansByAttribute(req.params.attribute, req.params.value);
    if(technicians){
        res.json(technicians);
    }else{
        res.send('Attribute not found');
    }
});
app.get('/deleteTechnicianById/:id', (req,res) => {
    const id = req.params.id;
    const technicians = techniciansController.deleteTechnicianById(req.params.id);
    res.json(technicians);
});
app.listen (PORT, () => console.log("hi"));
