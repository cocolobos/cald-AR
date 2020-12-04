const db = require("../models");
const Building = db.buildings;

exports.create = (req, res) => {
  if (
    !req.body.id ||
    !req.body.address ||
    !req.body.boilerID ||
    !req.body.fullname ||
    !req.body.phone
  ) {
    res.status(400).send({ message: "Data missing" });
    return;
  }

  const building = new Building({
    id: req.body.id,
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
  Building.findOne({ id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: `Building id ${req.params.id} not found.`,
        });
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
    !req.body.address &&
    !req.body.boilerID &&
    !req.body.fullname &&
    !req.body.phone
  ) {
    res.status(400).send({ message: "Some data is empty, please fill it." });
    return;
  }

  const buildingId = req.params.id;
  // eslint-disable-next-line no-unused-vars
  const { id, ...body } = req.body;

  Building.findOneAndUpdate({ id: buildingId }, body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Can not update building, the building was not found.",
        });
      } else res.send({ message: "Building was updated." });
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Can not update building id " + buildingId,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Building.findOneAndRemove({ id }, { useFindAndModify: false })
  // eslint-disable-next-line no-unused-vars
    .then((data) => res.send({ message: "Building was removed." }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Error removing building with id=" + id,
      });
    });
};
