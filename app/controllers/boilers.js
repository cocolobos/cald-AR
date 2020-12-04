const db = require("../models");
const Boilers = db.boilers;

exports.create = (req, res) => {
  console.log("body", req);
  if (
    !req.body.id ||
    !req.body.typeId ||
    !req.body.maintaince_rate ||
    !req.body.hour_maintaince_cost ||
    !req.body.hour_eventual_cost
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  const boilers = new Boilers({
    id: req.body.id,
    typeId: req.body.typeId,
    maintaince_rate: req.body.maintaince_rate,
    hour_maintaince_cost: req.body.hour_maintaince_cost,
    hour_eventual_cost: req.body.hour_eventual_cost,
  });
  boilers
    .save(boilers)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occurred while creating the boiler.",
      });
    });
};
exports.findAll = (req, res) => {
  Boilers.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred while retrieving boilers.",
      });
    });
};
exports.findOne = (req, res) => {
  Boilers.findOne({ id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Boiler with id ${req.params.id} was not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "some error occurred while finding the boiler.",
      });
    });
};
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  if (
    !req.body.id ||
    !req.body.typeId ||
    !req.body.maintaince_rate ||
    !req.body.hour_maintaince_cost ||
    !req.body.hour_eventual_cost
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;
  Boilers.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: `Cannot update boiler with id=${id}. Maybe Boiler was not found!`,
        });
      } else res.send({ message: "Boiler was update successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "some error occurred while updating the boiler.",
      });
    });
};
exports.delete = (req, res) => {
  const id = req.params.id;
  Boilers.findOneAndRemove({ id }, { useFindAndModify: false })
    // eslint-disable-next-line no-unused-vars
    .then((data) => res.send({ message: "Boiler was remove successfully" }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Error removing boiler with de Id:" + id,
      });
    });
};
