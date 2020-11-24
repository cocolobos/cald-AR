
//BD

const customers = require("../data/customers-data.json");

// getAllCustomers

const getAllCustomers = () => {
  return customers;
};
// getCustomerById

const getCustomerById = (id) => {
  const customerId = customers.find((customer) => {
    return customer.id === (id);
  });
  return customerId;
};

//getCustomersByAttribute

//getCustomerType

const getCustomerType = (customerType) => {
  const customerTypeFind = customers.filter((customer) => {
    return customer.customerType === (customerType);
  });
  return customerTypeFind;
};

//getCustomerByEmail

const getCustomerByEmail = (email) => {
  const customerEmail = customers.find((customer) => {
    return customer.email === (email);
  });
  return customerEmail;
};

//getCustomersByBuildings

const getCustomersByBuildings = (buildings) => {
  const customerByBuildings = customers.filter((customer) => {
    return customer.buildings === (buildings);
  });
  return customerByBuildings;
};

//getFiscalAddress

const getCustomerByAddress = (fiscal_address) => {
  const customerByAdress = customers.find((customer) => {
    return customer.fiscal_address === (fiscal_address);
  });
  return customerByAdress;
};

// deleteGetCustomerById

const deleteCustomersById = (id) => {
  const customerId = customers.find((customer) => {
    return customer.id === (id);
  });
  return customerId;
};

//exportModules

module.exports = {
  getAllCustomers,
  getCustomerById,
  getCustomerType,
  getCustomerByEmail,
  getCustomersByBuildings,
  getCustomerByAddress,
  deleteCustomersById
};
