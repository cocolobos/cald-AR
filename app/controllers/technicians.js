const db = require("../models");
const Technicians = db.technicians;

exports.create = (req, res) => {
  if (/^[a-z0-9A-Z._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(req.body.email)) {
    if (/^(?=.{3,})([a-zA-Z]+[a-zA-Z]+)$/.test(req.body.firstName)) {
      if (/^(?=.{3,})([a-zA-Z]+[a-zA-Z]+)$/.test(req.body.lastName)) {
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
      } else {
        res
          .status(409)
          .send({
            message: `${req.body.lastName} Must contain at least 3 character .`,
          });
        return;
      }
    } else {
      res
        .status(409)
        .send({
          message: `${req.body.firstName} Must contain at least 3 character .`,
        });
      return;
    }
  } else {
    res
      .status(409)
      .send({ message: `${req.body.email} Must have a valid email format .` });
    return;
  }

  const technician = new Technicians({
    id: req.body.id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    typeIds: req.body.typeIds,
    skillsId: req.body.skillsId,
    hourRate: req.body.hour_rate,
    dailyCapacity: req.body.daily_capacity,
  });
  technician
    .save(technician)
    .then((data) => {
      res.send(data);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(503).send({
        message: "Some error ocurred while creating new Technician",
      });
    });
};

exports.findAll = (req, res) => {
  Technicians.find({})
    .then((data) => {
      res.send(data);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(503).send({
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
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(503).send({
        message: "Some error ocurred while finding Technician by ID",
      });
    });
};

exports.update = (req, res) => {
  if (/^[a-z0-9A-Z._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(req.body.email)) {
    if (/^(?=.{3,})([a-zA-Z]+[a-zA-Z]+)$/.test(req.body.firstName)) {
      if (/^(?=.{3,})([a-zA-Z]+[a-zA-Z]+)$/.test(req.body.lastName)) {
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
          res.status(400).send({ message: "Data to update can not be empty" });
          return;
        }
      } else {
        res
          .status(409)
          .send({
            message: `${req.body.lastName} Must contain at least 3 character .`,
          });
        return;
      }
    } else {
      res
        .status(409)
        .send({
          message: `${req.body.firstName} Must contain at least 3 character .`,
        });
      return;
    }
  } else {
    res
      .status(409)
      .send({ message: `${req.body.email} Must have a valid email format .` });
    return;
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
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(503).send({
        message: "Some error ocurred while updating Technician",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Technicians.findOneAndRemove({ id }, { useFindAndModify: false })
    // eslint-disable-next-line no-unused-vars
    .then((data) => res.send({ message: "Technician removed successfully" }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(503).send({
        message: "Some error ocurred while deleting Technician",
      });
    });
};
