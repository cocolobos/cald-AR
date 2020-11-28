const boilersTypes = require ("../controllers/boiler-types-functions");

var router = require ("express").Router();

//retrieve all type of boilers
router.get("/",boilersTypes.findAll);

//create new type of boiler
router.post("/",boilersTypes.create);

//retrieve a single type of boiler by id
router.get("/:id",boilersTypes.findOne);
//retrieve a single type of boiler by skills ID
router.get("/:skillsId",boilersTypes.findOne);
//retrieve a single type of boiler by description
router.get("/:descriptions",boilersTypes.findOne);
//retrieve a single type of boiler by stock
router.get("/:stock",boilersTypes.findOne);

//update a type of boiler with id
router.put(":/id",boilersTypes.update);

//delete a type of boiler
router.delete(":/id",boilersTypes.delete);

module.exports = router;