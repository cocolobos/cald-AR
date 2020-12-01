const customer = require("../controllers/customer");

var router = require("express").Router();

router.get("/", customer.findAll);

router.post("/", customer.create);

router.get("/:id", customer.findOne);

router.put("/:id", customer.update);

router.delete("/:id", customer.delete);

module.exports = router;
