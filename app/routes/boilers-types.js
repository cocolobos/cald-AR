const boilersTypes = require ("../controllers/boilersTypes");

var router = require ("express").Router();

//retrieve all type of boilers
router.get('/',boilersTypes.findAll);
//retrieve a single type of boiler by id
router.get('/:id',boilersTypes.findOne);
//create new type of boiler
router.post('/',boilersTypes.create);
//update a type of boiler with id
router.put('/:id',boilersTypes.update);
//delete a type of boiler
router.delete('/:id',boilersTypes.delete);

module.exports = router;