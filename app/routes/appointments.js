 const appoinment = require("../controllers/appointment");

 var router = require("express").Router();

// get all appointments
router.get("/", appoinment.findAll);

// get appointment by id
router.get("/:id", appoinment.findOne);

// create a new appointment
router.post("/", appoinment.create);

// update appoinrment by id
router.put("/:id", appoinment.update);

// delete appointment by id
router.delete("/:id", appoinment.delete);

module.exports = router;