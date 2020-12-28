const db = require("../models");
const Technicians = db.technicians;

exports.create = (req, res) => {
  if (/^[a-z0-9A-Z._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(req.body.email)) {
    if (/^(?=.{3,})([a-zA-Z]+[a-zA-Z]+)$/.test(req.body.fullName)) {
      if (/^\d{7,}$/.test(req.body.phone)) {
        if (
          !req.body.number ||
          !req.body.fullName ||
          !req.body.email ||
          !req.body.phone ||
          !req.body.statusActive ||
          !req.body.trained ||
          !req.body.assignedClients ||
          !req.body.spareHoursAvailable
        ) {
          res.status(400).send({ message: "Content can not be empty" });
          return;
        }
      } else {
        res
          .status(409)
          .send({
            message: `${req.body.fullName} Must contain at least 3 character .`,
          });
        return;
      }
    } else {
      res
        .status(409)
        .send({
          message: `${req.body.phone} Must contain at least 7 character .`,
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
    number: req.body.number,
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    statusActive: req.body.statusActive,
    trained: req.body.trained,
    assignedClients: req.body.assignedClients,
    spareHoursAvailable: req.body.spareHoursAvailable,
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
  Technicians.findOne({ number: req.params.number })
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
    if (/^(?=.{3,})([a-zA-Z]+[a-zA-Z]+)$/.test(req.body.fullName)) {
      if (/^(?=.{3,})([a-zA-Z]+[a-zA-Z]+)$/.test(req.body.phone)) {
        if (
          !req.body.number ||
          !req.body.fullName ||
          !req.body.email ||
          !req.body.phone ||
          !req.body.statusActive ||
          !req.body.trained ||
          !req.body.assignedClients ||
          !req.body.spareHoursAvailable
        ) {
          res.status(400).send({ message: "Data to update can not be empty" });
          return;
        }
      } else {
        res
          .status(409)
          .send({
            message: `${req.body.fullName} Must contain at least 3 character .`,
          });
        return;
      }
    } else {
      res
        .status(409)
        .send({
          message: `${req.body.phone} Must contain at least 7 character .`,
        });
      return;
    }
  } else {
    res
      .status(409)
      .send({ message: `${req.body.email} Must have a valid email format .` });
    return;
  }
  const number = req.params.number;
  Technicians.findOneAndUpdate({ number }, req.body, { useFindAndModify: false })
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
  const number = req.params.number;
  Technicians.findOneAndRemove({ number }, { useFindAndModify: false })
    // eslint-disable-next-line no-unused-vars
    .then((data) => res.send({ message: "Technician removed successfully" }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(503).send({
        message: "Some error ocurred while deleting Technician",
      });
    });
};
