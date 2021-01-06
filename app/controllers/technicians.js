const db = require("../models");
const Technicians = db.technicians;
const ObjectId = require("mongoose").Types.ObjectId;

exports.create = (req, res) => {
  if (/^[a-z0-9A-Z._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(req.body.email)) {

    if (/^[a-zA-Z0-9_ ]*$/.test(req.body.fullName)) {
      if (/^\d{7,}$/.test(req.body.phone)) {
        if (
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
        res.status(409).send({
          message: `${req.body.phone} Must contain at least 7 character .`,
        });
        return;
      }
    } else {
      res.status(409).send({
        message: `${req.body.fullName} Must contain at least 3 character .`,
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
      res.status(503).send({ ...err });
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
        message: `Some error ocurred while finding Technicians ${err}`,
      });
    });
};

exports.findOne = (req, res) => {
  Technicians.findOne({ _id: ObjectId(req.params.id) })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Technician with id ${req.params.id} was not found`,
        });
        return;
      }
      res.status(200).send({
        message: "Request completed succesfully.",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error ocurred while retrieving technician.",
      });
    });
};

exports.update = (req, res) => {
  if (/^[a-z0-9A-Z._%+-]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/.test(req.body.email)) {
    if (/^[a-zA-Z0-9_ ]*$/.test(req.body.fullName)) {
      if (/^\d{7,}$/.test(req.body.phone)) {
        if (
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
        res.status(409).send({
          message: `${req.body.phone} Must contain at least 7 character .`,
        });
        return;
      }
    } else {
      res.status(409).send({
        message: `${req.body.fullName} Must contain at least 3 character .`,
      });
      return;
    }
  } else {
    res
      .status(409)
      .send({ message: `${req.body.email} Must have a valid email format .` });
    return;
  }
  Technicians.findOneAndUpdate({ _id: ObjectId(req.params.id) }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Technician with id = ${ObjectId(
            req.params.id
          )}. Maybe Technician was not found`,
        });
      } else
        res.status(200).send({ message: "Technician was updated succesfully" });
    })
    .catch((err) => {
      res.status(500).send({
        message: `Error updating Technician with id = ${ObjectId(
          req.params.id
        )}`,
        err,
      });
    });
};

exports.delete = (req, res) => {
  Technicians.findOneAndRemove(
    { _id: ObjectId(req.params.id) },
    { useFindAndModify: false }
  )
    .then(() =>
      res.status(200).send({ message: "Technician was removed succesfully" })
    )
    .catch((err) => {
      res.status(500).send({
        message: `Some error ocurred while removing technician with id = ${ObjectId(
          req.params.id
        )}`,
        err,
      });
    });
};
