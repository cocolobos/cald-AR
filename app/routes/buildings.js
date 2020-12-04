const building = require("../controllers/buildings-functions");
var router = require("express").Router();

router.get("/", building.findAll);
router.get("/:id", building.findOne);
router.post("/", building.create);
router.put("/:id", building.update);
router.delete("/:id", building.delete);

module.exports = router;
