const db = require("../models");
const Appointment = db.appointments;

exports.create = (req, res) => {
  if (req.body.id.length <5) {
    if (
      !req.body.id ||
      !req.body.issue ||
      !req.body.date ||
      !req.body.estimatedTime
    ) {
      res.status(400).send({ message: "Content can not be empty." });
      return;
    }
  } else {
    res.status(400).send({ message: "Id cannot contain more than 4 characters." });
      return;
  }

  const appointment = new Appointment({
    id: req.body.id,
    issue: req.body.issue,
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
  Appointment.findOne({ id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Appointment with id ${req.params.id} was not found.`,
        });
      }
      res.send(data);
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

if (req.body.id.length <5) {
    if (
      !req.body.id ||
      !req.body.issue ||
      !req.body.date ||
      !req.body.estimatedTime
    ) {
      res.status(400).send({ message: "Content can not be empty." });
      return;
    }
  } else {
    res.status(400).send({ message: "Id cannot contain more than 4 characters." });
      return;
  }

  const id = req.params.id;

  Appointment.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update appointment with id=${id}. Maybe the appointment was not found`,
        });
      } else res.send({ message: "Appointment was updated successfully." });
      res.send(data);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while updating appointment with id=" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Appointment.findOneAndRemove({ id }, { useFindAndModify: false })
    // eslint-disable-next-line no-unused-vars
    .then((data) =>
      res.send({ message: "Appointment was removed successfully." })
    )
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Error removing appointment with id=" + id,
      });
    });
};
