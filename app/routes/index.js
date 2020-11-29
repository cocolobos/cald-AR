const { route } = require('./appointments');
const appointmentsRouter = require('./appointments')
const techniciansRouter = require('./technicians');
const boilersTypeRouter = require('./boilers-types');

var router = require("express").Router();

router.use('/appointments', appointmentsRouter)
router.use('/technicians',techniciansRouter);
router.use('/boilersTypes',boilersTypeRouter);

module.exports = router;
const customerRouter = require("./customers");
const {route} = require('./customers')

const customersRouter = require("./customers");

var router = require("express").Router();

router.use("/customers", customersRouter);

module.exports = router;
