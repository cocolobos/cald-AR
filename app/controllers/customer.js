const db = require("../models");
const Customer = db.customer;

// Create and save a new building
exports.create = (req, res) => {
  //Validate request
  if (
    !req.body.id ||
    !req.body.customerType ||
    !req.body.email ||
    !req.body.building ||
    !req.body.fiscal_address
  ) {
    res.status(400).send({ message: "This fields are require" });
    return;
  }

  // Create a new curstomer

  const customer = new Customer({
    id: req.body.id,
    customerType: req.body.customerType,
    email: req.body.email,
    building: req.body.building,
    fiscal_address: req.body.fiscal_address,
  });

  //Save customer in the database
  customer
    .save(customer)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the customer",
      });
    });
};

// Retrieve all Building from the database

exports.findAll = (req, res) => {
  building
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the customer",
      });
    });
};

// Find a single Customer with an ID

exports.findOne = (req, res) => {
  building
    .find({ id: req.params.id })
    .then((result) => {
      if (!data) {
        return res.status(404).send({
          message: ` Customer with id ${req.params.id} was not found`,
        });
      }
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving the customer",
      });
    });
};

// Update a Customer by the id in the request

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }
  //Validate request
  if (
    !req.body.id ||
    !req.body.customerType ||
    !req.body.email ||
    !req.body.building ||
    !req.body.fiscal_address
  ) {
    res.status(400).send({ message: "This fields are require" });
    return;
  }

  const id = req.params.id;

  Customer.findOneAndUpdate({ id }, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        return res.status(404).send({
          message: ` Cannot update Customer with id=${id}.Maybe Customer was not found!`,
        });
      } else {
        res.send({ message: "Customer was updated succesfully" });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Customer with id =" + id,
      });
    });
};

// Delete a Customer with the specified id in the request

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
