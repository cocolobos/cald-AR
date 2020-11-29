const customer = require('../controllers/customer');


let router = require('express').Router();

// Retrieve all customers

router.get('/', customer.findAll);

// Create a new customer

router.post('/', customer.create);

// Retrieve a single cursomer with ID

router.get('/:id', customer.findOne);

// Update a building with ID

router.put('/:id', customer.update);

// Delete a building with ID

router.delete('/:id', customer.delete);

module.exports = router;

