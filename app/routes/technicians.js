const technicians = require("../controllers/technicians.js");
var router = require("express").Router();

router.get("/", technicians.findAll);
router.post("/", technicians.create);
router.get("/:number", technicians.findOne);
router.put("/:number", technicians.update);
router.delete("/:number", technicians.delete);

module.exports = router;
