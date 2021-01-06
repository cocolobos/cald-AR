const appointments = require("../controllers/appointment");
var router = require("express").Router();

router.get("/", appointments.findAll);
router.get("/:id", appointments.findOne);
router.post("/", appointments.create);
router.put("/:id", appointments.update);
router.delete("/:id", appointments.delete);

module.exports = router;
