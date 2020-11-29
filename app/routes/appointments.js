 const appointment = require("../controllers/appointment");

 var router = require("express").Router();

// get all appointments
router.get("/", appointment.findAll);

// get appointment by id
router.get("/:id", appointment.findOne);

// create a new appointment
router.post("/", appointment.create);

// update appointment by id
router.put("/:id", appointment.update);

// delete appointment by id
router.delete("/:id", appointment.delete);

module.exports = router;