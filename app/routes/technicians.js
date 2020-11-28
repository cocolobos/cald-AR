const technicians = require ("../controllers/technicians");

var router = require ("express").Router();

//retrieve all technicians
router.get("/",technicians.findAll);

//create new technician
router.post("/",technicians.create);

//retrieve a single technician by id
router.get("/:id",technicians.findOne);
//retrieve a single technician by first name
router.get("/:firstName",technicians.findOne);
//retrieve a single technician by last name
router.get("/:lastName",technicians.findOne);
//retrieve a single technician by email
router.get("/:email",technicians.findOne);
//retrieve a single technician by type of id
router.get("/:typeIds",technicians.findOne);
//retrieve a single technician by skill id
router.get("/:skillsId",technicians.findOne);
//retrieve a single technician by hour rate
router.get("/:hour_rate",technicians.findOne);
//retrieve a single technician by daily capacity
router.get("/:daily_capacity",technicians.findOne);

//update a technician with id
router.put(":/id",technicians.update);

//delete a technician
router.delete(":/id",technicians.delete);

module.exports = router;