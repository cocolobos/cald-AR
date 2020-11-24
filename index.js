const express = require ('express');
const techniciansController = require ('./controllers/technicians');
const appointmentsController = require('./controllers/appointments-functions');
const boilersController = require('./controllers/boilers-functions')
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

app.get('/appointments', (req, res) => {
    const appointments = appointmentsController.getAllAppointments();
    res.json(appointments);
});

app.get('/appointment/:id', (req, res) => {
    const appointment = appointmentsController.getAppointmentsById('id');
    res.json(appointment);
});

app.get('/appointment/attribute/:value', (req, res) => {
    const appointment = appointmentsController.getAppointmentsByAttribute(req.params.attribute, req.params.value);
    res.json(appointment);
});

app.get('/deleteAppointment/:id', (req, res) => {
    const appointment = appointmentsController.deleteAppointmentsById('id');
    res.json(appointment);
});

app.get('/getAllBoilers', (req, res) => {
    const boilers = boilersController.getAllBoilers();
    res.json(boilers);
});
app.get('/getBoilersById/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const boillerById = boilersController.getBoilerById(id);
    if (boillerById){
        res.json(boillerById)
    } else {
        res.status(400).json('Id not found');
    }
})
app.get('/getBoilerType/:boilerType', (req, res) => {
    let boilerType = req.params.boilerType;
    const boilerTypeResult = boilersController.getBoilerType(boilerType);
    if(boilerTypeResult.length === 0){
        res.status(400).json('Boiler type not found')
    } else {
        res.json(boilerTypeResult);
    }
})
app.get('/deleteBoilerById/:id', (req, res) => {
    let id = parseInt(req.params.id);
    const boillerById = boilersController.getBoilerById(id);
    if (boillerById){
        res.json(boillerById)
    } else {
        res.status(400).json('Id not found')
    }
});

app.listen (PORT, () => console.log("hi"));
