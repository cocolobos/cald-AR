const db = require("../models");
const Building = db.buildings;
const ObjectId = require("mongoose").Types.ObjectId;

exports.create = (req, res) => {
  if (/^(?=.{6,})([a-zA-Z]+\s{1}[a-zA-Z]+)$/.test(req.body.fullname)) {
    if (/^(?=.{7,})([0-9])+$/.test(req.body.phone)) {
      if (/^(?=.{5,})([a-zA-Z0-9]+\s{1}[0-9]+)$/.test(req.body.address)) {
        if (
          !req.body.address ||
          !req.body.boilerID ||
          !req.body.fullname ||
          !req.body.phone
        ) {
          res.status(400).send({ message: "Data missing" });
          return;
        }
      } else {
        res
          .status(409)
          .send({ message: `${req.body.address} Is not a valid address` });
        return;
      }
    } else {
      res
        .status(409)
        .send({ message: `${req.body.phone} Is not a valid phone number` });
      return;
    }
  } else {
    res
      .status(409)
      .send({ message: `${req.body.fullname} Is not a valid name` });
    return;
  }

  const building = new Building({
    address: req.body.address,
    boilerID: req.body.boilerID,
    fullname: req.body.fullname,
    phone: req.body.phone,
  });

  building
    .save(building)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Can not create the building.",
      });
    });
};

exports.findAll = (req, res) => {
  Building.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Can not find all buildings.",
      });
    });
};

exports.findOne = (req, res) => {
  Building.findOne({ _id: ObjectId(req.params._id) })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Building id ${req.params._id} not found.`,
        });
        return;
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Can not find all buildings.",
      });
    });
};

exports.update = (req, res) => {
  if (
    !req.body.fullname ||
    /^(?=.{6,})([a-zA-Z]+\s{1}[a-zA-Z]+)$/.test(req.body.fullname)
  ) {
    if (!req.body.phone || /^(?=.{7,})([0-9])+$/.test(req.body.phone)) {
      if (
        !req.body.address ||
        /^(?=.{5,})([a-zA-Z0-9]+\s{1}[0-9]+)$/.test(req.body.address)
      ) {
        if (
          !req.body.address &&
          !req.body.boilerID &&
          !req.body.fullname &&
          !req.body.phone
        ) {
          res.status(400).send({ message: "Empty data, please fill it." });
          return;
        }
      } else {
        res
          .status(409)
          .send({ message: `${req.body.address} Is not a valid address` });
        return;
      }
    } else {
      res
        .status(409)
        .send({ message: `${req.body.phone} Is not a valid phone number` });
      return;
    }
  } else {
    res
      .status(409)
      .send({ message: `${req.body.fullname} Is not a valid name` });
    return;
  }

  Building.findOneAndUpdate({ _id: ObjectId(req.params._id) }, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Can not update building, the building was not found.",
        });
      } else res.send({ message: "Building was updated." });
    })
    .catch(() => {
      res.status(500).send({
        message: "Can not update building id " + ObjectId(req.params._id),
      });
    });
};

exports.delete = (req, res) => {
  Building.findOneAndRemove(
    { _id: ObjectId(req.params._id) },
    { useFindAndModify: false }
  )
    .then((data) => res.send(data))
    .catch((error) => {
      res.status(500).send(error);
    });
};
