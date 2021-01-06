const db = require("../models");
const Appointment = db.appointments;
const ObjectId = require("mongoose").Types.ObjectId;

exports.create = (req, res) => {
  if (req.body.estimatedTime < 9) {
    if (
      !req.body.buildingId ||
      !req.body.boilerId ||
      !req.body.maintenanceType ||
      !req.body.date ||
      !req.body.estimatedTime
    ) {
      res.status(400).send({ message: "Content can not be empty." });
      return;
    }
  } else {
    res.status(409).send({
      message: `${req.body.estimatedTime} cannot be more than 9 hours.`,
    });
    return;
  }

  const appointment = new Appointment({
    buildingId: req.body.buildingId,
    boilerId: req.body.buildingId,
    maintenanceType: req.body.maintenanceType,
    date: req.body.date,
    estimatedTime: req.body.estimatedTime,
  });

  appointment
    .save(appointment)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ocurred creating the appointment",
      });
    });
};

exports.findAll = (req, res) => {
  Appointment.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving appointments.",
      });
    });
};

exports.findOne = (req, res) => {
  Appointment.findOne({ _id: ObjectId(req.params.id) })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Appointment with id ${req.params.id} was not found.`,
        });
      }
      res.status(200).send({
        message: "Request completed succesfully.",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving appointment.",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty.",
    });
  }

  if (req.body.estimatedTime < 9) {
    if (
      !req.body.buildingId ||
      !req.body.boilerId ||
      !req.body.maintenanceType ||
      !req.body.date ||
      !req.body.estimatedTime
    ) {
      res.status(400).send({ message: "Content can not be empty." });
      return;
    }
  } else {
    res.status(409).send({
      message: `${req.body.estimatedTime} cannot be more than 9 hours.`,
    });
    return;
  }

  Appointment.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update appointment with id=${ObjectId(
            req.params.id
          )}. Maybe the appointment was not found`,
        });
      } else res.send({ message: "Appointment was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Some error (${err}) ocurred while updating appointment with id=${ObjectId(
          req.params.id
        )}`,
      });
    });
};

exports.delete = (req, res) => {
  Appointment.findOneAndRemove(
    { _id: ObjectId(req.params.id) },
    { useFindAndModify: false }
  )
    .then(() =>
      res.status(200).send({ message: "Appointment was removed successfully." })
    )
    .catch((err) => {
      res.status(500).send({
        message: `(${err})Error removing appointment with id= ${ObjectId(
          req.params.id
        )}`,
      });
    });
};
