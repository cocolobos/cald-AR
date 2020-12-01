const express = require ('express');
const router = express.Router();
const building = require("../controllers/buildings-functions");

router.get("/", building.findAll);

router.get("/:id", building.findOne);

router.post("/", building.create);

router.put("/:id", building.update);

router.delete("/:id", building.delete);

module.exports = router;