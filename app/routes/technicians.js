const technicians = require ("../controllers/technicians");

var router = require ("express").Router();

//retrieve all technicians
router.get("/",technicians.findAll);

//create new technician
router.post("/",technicians.create);

//retrieve a single technician by id
router.get("/:id",technicians.findOne);

//update a technician with id
router.put(":/id",technicians.update);

//delete a technician
router.delete(":/id",technicians.delete);

module.exports = router;