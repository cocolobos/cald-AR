const customers = require("../data/customers-data.json");

const getAllCustomers = () => {
  return customers;
};
const getCustomerById = (id) => {
  const customerId = customers.find((customer) => {
    return customer.id === (id);
  });
  return customerId;
};

const getCustomerType = (customerType) => {
  const customerTypeFind = customers.filter((customer) => {
    return customer.customerType === (customerType);
  });
  return customerTypeFind;
};

const getCustomerByEmail = (email) => {
  const customerEmail = customers.find((customer) => {
    return customer.email === (email);
  });
  return customerEmail;
};

const getCustomersByBuildings = (buildings) => {
  const customerByBuildings = customers.filter((customer) => {
    return customer.buildings === (buildings);
  });
  return customerByBuildings;
};

const getCustomerByAddress = (fiscal_address) => {
  const customerByAdress = customers.find((customer) => {
    return customer.fiscal_address === (fiscal_address);
  });
  return customerByAdress;
};

const deleteCustomersById = (id) => {
  const customerId = customers.find((customer) => {
    return customer.id === (id);
  });
  return customerId;
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  getCustomerType,
  getCustomerByEmail,
  getCustomersByBuildings,
  getCustomerByAddress,
  deleteCustomersById
};
