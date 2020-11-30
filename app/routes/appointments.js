const appointment = require("../controllers/appointment");

var router = require("express").Router();

router.get("/", appointment.findAll);

router.get("/:id", appointment.findOne);

router.post("/", appointment.create);

router.put("/:id", appointment.update);

router.delete("/:id", appointment.delete);

module.exports = router;