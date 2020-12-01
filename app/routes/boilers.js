const boilers = require('../controllers/boilers');
var router = require("express").Router();

router.get("/", boilers.findAll);
router.post("/", boilers.create);
router.get("/:id", boilers.findOne);
router.put("/:id", boilers.update);
router.delete("/:id", boilers.delete);

module.exports = router;