const express = require("express");
const server = express();
const customers = require("../data/customers-data.json");

// getAllCustomers

server.get("/customers", function (req, res) {
  respuesta = {
    codigo: 200,
    list: customers,
  };
  res.send(customers);
});

// getCustomerById

server.get("/customers/:id", function (req, res) {
  let id = req.params.id;
  const i = customers.findIndex((customer) => {
    return customer.id == id;
  });
  if (i >= 0 || i == "number") res.json(customers[i]);
  res.status(404).json("id not found");
});

//getCustomersByAttribute

// CustomerType
server.get(`/customers/type/:customerType`, function (req, res) {
  let customerType = req.params.customerType;

  const findCustomersType = customers.some(
    (customer) => customer.customerType === customerType
  );
  if (findCustomersType) {
    res.json(
      customers.filter((customer) => customer.customerType === customerType)
    );
  } else {
    res.status(400).json("Customer type not found");
  }
});

// Email

server.get(`/customers/email/:email`, function (req, res) {
  let expRegEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let email = req.params.email;
  const i = customers.findIndex((customer) => {
    return customer.email == email;
  });
  if (expRegEmail.test(email)) {
    res.json(customers[i]);
  } else {
    res.status(404).json("Email not found");
  }
});

// Buildings

server.get("/customers/buildings/:number", function (req, res) {
  let buildings = parseInt(req.params.number);
  const findNumberOfBuildings = customers.some(
    (customer) => customer.buildings === buildings
  );
  if (findNumberOfBuildings) {
    res.json(customers.filter((customer) => customer.buildings === buildings));
  } else {
    res.status(400).json("Customer type not found");
  }
});

// Fiscal address

server.get("/customers/address/:fiscal_address", function (req, res) {
  let fiscal_address = req.params.fiscal_address;
  const i = customers.findIndex((customer) => {
    return customer.fiscal_address == fiscal_address;
  });
  if (i >= 0) res.json(customers[i]);
  res.status(404).json("Fiscal Address not found ");
});

// deleteGetCustomerById

server.delete("/customers/:id", function (req, res) {
  let id = req.params.id;
  const i = customers.findIndex((customer) => {
    return customer.id == id;
  });
  if (i >= 0 || i == "number") res.json(customers[i]);
  res.status(404).json("id not found. Cant delete");
});
