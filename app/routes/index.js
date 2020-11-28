const { route } = require('./appointments');
const appointmentsRouter = require('./appointments')
const techniciansRouter = require('./technicians');

var router = require("express").Router();

router.use('/appointments', appointmentsRouter)
router.use('/technicians',techniciansRouter);

module.exports = router;