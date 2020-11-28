const { route } = require('./appointments');
const appointmentsRouter = require('./appointments')
const techniciansRouter = require('./technicians');
const boilersTypeRouter = require('./boilers-type');

var router = require("express").Router();

router.use('/appointments', appointmentsRouter)
router.use('/technicians',techniciansRouter);
router.use('/boilers-type',boilersTypeRouter);

module.exports = router;