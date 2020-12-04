const db = require("../models");
const Technicians = db.technicians;

exports.create = (req, res) => {
  if (
    !req.body.id ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.typeIds ||
    !req.body.skillsId ||
    !req.body.hour_rate ||
    !req.body.daily_capacity
  ) {
    res.status(400).send({ message: "Content can not be empty" });
    return;
  }
  const technician = new Technicians({
    id: req.body.id,
    name: req.body.name,
    email: req.body.email,
    typeIds: req.body.typeIds,
    skillsId: req.body.skillsId,
    hourRate: req.body.hourRate,
    typeBoilers: req.body.typeBoilers,
    dailyCapacity: req.body.dailyCapacity,
  });
  technician
    .save(technician)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while creating new Technician",
      });
    });
};

exports.findAll = (req, res) => {
  Technicians.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while finding Technicians",
      });
    });
};

exports.findOne = (req, res) => {
  Technicians.findOne({ id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Technician could not be found",
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while finding Technician by ID",
      });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty",
    });
  }
  if (
    !req.body.id ||
    !req.body.firstName ||
    !req.body.lastName ||
    !req.body.email ||
    !req.body.typeIds ||
    !req.body.skillsId ||
    !req.body.hour_rate ||
    !req.body.daily_capacity
  ) {
    res.status(400).send({ message: "Content can not be empty" });
  }
  const id = req.params.id;
  Technicians.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Some error ocurred while updating Technician",
        });
      } else res.send({ message: "Technician was update successfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while updating Technician",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Technicians.findOneAndRemove({ id }, { useFindAndModify: false })
    .then((data) => res.send({ message: "Technician removed successfully" }))
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while deleting Technician",
      });
    });
};
