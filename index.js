const express = require ('express');
const techniciansController = require ('./controllers/technicians');
const appointmentsController = require('./controllers/appointments-functions');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/getAllTechnicians', (req, res) => {
    const technicians = techniciansController.getAllTechnicians();
    res.json(technicians);
});

app.get('/getTechnicianById/:id',(req,res) => {
    const id = req.params.id;
    const technicians = techniciansController.getTechnicianById(id);
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
    const technicians = techniciansController.deleteTechnicianById(id);
    res.json(technicians);
});

app.listen (PORT, () => console.log("hi"));


app.get('/appointments', (req, res) => {
    const appointments = appointmentsController.getAllAppointments();
    res.json(appointments);
});

app.get('/appointment/:id', (req, res) => {
    const appointment = appointmentsController.getAppointmentsById('id');
    res.json(appointment);
});

app.get('/deleteAppointment/:id', (req, res) => {
    const appointment = appointmentsController.deleteAppointmentsById('id');
    res.json(appointment);
});