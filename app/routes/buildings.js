const express = require ('express');
const router = express.Router();

router.get('/', require('../controllers/buildings/getBuildingsAll'));

router.delete('/:id', require('../controllers/buildings/deleteBuildingById'));

router.get('/:id', requiere('../controllers/buildings/getBuildingById'));

router.get('/:attribute/:value', require('../controllers/buildings/getBuildingsByAttribute'));


module.exports = router;