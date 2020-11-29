const db = require("../models");
const Appointment = db.appointments;

// create and save an appointment
exports.create = (req, res) => {
    // validate req
    if (!req.body.id || !req.body.issue || !req.body.date || !req.body.estimatedTime) {
        res.status(400).send({ message: "Content can not be empty." });
        return;
    }

    // create an appointment
    const appointment = new Appointment({
        id: req.body.id,
        issue: req.body.issue,
        date: req.body.date,
        estimatedTime: req.body.estimatedTime
    });

    // save appointment in db
    appointment
        .save(appointment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred creating the appointment"
            });
        });
};

// retrieve all appointments from db
exports.findAll = (req, res) => {
    Appointment.find({})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving appointments."
            });
        });
};

// find appointment by id
exports.findOne = (req, res) => {
    Appointment.findOne({id:req.params.id})
        .then(data => {
            if (!data) {
                return res.status(404).send({
                    message: `Appointment with id ${req.params.id} was not found.`
                })
            }
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving appointment."
            });
        });
};
// update an appointment by id
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: "Data to update can not be empty."
        });
    }
    // validate request
    if (!req.body.id || !req.body.issue || !req.body.date || !req.body.estimatedTime) {
        res.status(400).send({ message: "Content can not be empty." });
        return;
    }

    const id = req.params.id;

    Appointment.findOneAndUpdate({id}, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update appointment with id=${id}. Maybe the appointment was not found`
                });
            } else res.send({ message: "Appointment was updated successfully." });
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Some error ocurred while updating appointment with id=" + id
            });
        });
};

// delete appointment by id
exports.delete = (req, res) => {
    const id = req.params.id;
    Appointment.findOneAndRemove({id}, { useFindAndModify: false })
        .then(data =>
            res.send({ message: "Appointment was removed successfully."})
        )
        .catch(err => {
            res.status(500).send({
                message: 'Error removing appointment with id=' + id
            });
        });
};