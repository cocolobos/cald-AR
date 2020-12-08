const db = require("../models");
const BoilerType = db.boilersTypes;

exports.create = (req, res) => {
  if (req.body.stock > 20 || req.body.stock <= 0) {
    if (
      !req.body.id ||
      !req.body.skillsId ||
      !req.body.descriptions ||
      !req.body.stock
    ) {
      res.status(400).send({ message: "Content can not be empty" });
      return;
    }
    res.status(409).send({
      message: ` ${req.body.stock} is not a number between 1 and 20 `,
    });
    return;
  }
  if (req.body.skillsId > 10 || req.body.skillsId <= 0) {
    res.status(409).send({
      message: ` ${req.body.skillsId} is not a number between 1 and 10 `,
    });
    return;
  }
  const boilerType = new BoilerType({
    id: req.body.id,
    skillsId: req.body.skillsId,
    descriptions: req.body.descriptions,
    stock: req.body.stock,
  });

  boilerType
    .save(boilerType)
    .then((data) => {
      res.send(data);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while creating new Boiler Type",
      });
    });
};

exports.findAll = (req, res) => {
  BoilerType.find({})
    .then((data) => {
      res.send(data);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while finding Boiler Type",
      });
    });
};

exports.findOne = (req, res) => {
  BoilerType.findOne({ id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: "Boiler Type with id ${req.params.id} could not be found",
        });
      }
      res.send(data);
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while finding Boiler Type by ID",
      });
    });
};

exports.update = (req, res) => {
  if (req.body.stock > 20 || req.body.stock <= 0) {
    if (
      !req.body.id ||
      !req.body.skillsId ||
      !req.body.descriptions ||
      !req.body.stock
    ) {
      res.status(400).send({ message: "Content can not be empty" });
      return;
    }
    res.status(409).send({
      message: ` ${req.body.stock} is not a number between 1 and 20 `,
    });
    return;
  }
  if (req.body.skillsId > 10 || req.body.skillsId <= 0) {
    res.status(409).send({
      message: ` ${req.body.skillsId} is not a number between 1 and 10 `,
    });
    return;
  }

  const id = req.params.id;

  BoilerType.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "Some error ocurred while updating Boiler Type",
        });
      } else res.send({ message: "Boiler Type was update successfully" });
    })
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while updating Boiler Type",
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  BoilerType.findOneAndRemove({ id }, { useFindAndModify: false })
    // eslint-disable-next-line no-unused-vars
    .then((data) => res.send({ message: "Boiler Type removed successfully" }))
    // eslint-disable-next-line no-unused-vars
    .catch((err) => {
      res.status(500).send({
        message: "Some error ocurred while deleting Boiler Type",
      });
    });
};
