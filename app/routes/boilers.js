const boilers = require('../controllers/boilers');
var router = require("express").Router();

//Retrieve All Boilers
router.get("/", boilers.findAll);

//Create a new boiler
router.post("/", boilers.create);

// Retrieve a single boiler with Id
router.get("/:id", boilers.findOne);

//Update a boiler with Id
router.post("/:id", boilers.update);

//Delete a boiler with id
router.post("/:id", boilers.delete);

module.exports = router;