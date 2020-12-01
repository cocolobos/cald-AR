const db = require("../models");
const Customer = db.customers;

exports.create = (req, res) => {
  if (
    !req.body.id ||
    !req.body.customerType ||
    !req.body.email ||
    !req.body.buildings ||
    !req.body.fiscal_address
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const customer = new Customer({
    id: req.body.id,
    customerType: req.body.customerType,
    email: req.body.email,
    buildings: req.body.buildings,
    fiscal_address: req.body.fiscal_address,
  });

  customer
    .save(customer)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer",
      });
    });
};

exports.findAll = (req, res) => {
  Customer.find({})
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
  Customer.findOne({ id: req.params.id })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: ` Customer with id ${req.params.id} was not found`,
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the customer",
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
    !req.body.customerType ||
    !req.body.email ||
    !req.body.buildings ||
    !req.body.fiscal_address
  ) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const id = req.params.id;

  Customer.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: ` Cannot update Customer with id=${id}.Maybe Customer was not found!`,
        });
      } else res.send({ message: "Customer was updated successfully." });
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Customer with id =" + id,
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Customer.findOneAndRemove({ id }, { useFindAndModify: false })
    .then((data) => {
      res.send({ message: " Customer was removed succesfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error removing Customer with id=" + id,
      });
    });
};
