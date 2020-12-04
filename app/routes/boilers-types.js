const boilersTypes = require("../controllers/boilersTypes");
var router = require("express").Router();

router.get("/", boilersTypes.findAll);
router.get("/:id", boilersTypes.findOne);
router.post("/", boilersTypes.create);
router.put("/:id", boilersTypes.update);
router.delete("/:id", boilersTypes.delete);

module.exports = router;
