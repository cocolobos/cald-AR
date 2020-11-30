const appointmentsRouter = require("./appointments");
const techniciansRouter = require("./technicians");
const boilersTypeRouter = require("./boilers-types");
const customersRouter = require("./customers");
const buildingsRouter = require('./buildings');
var router = require("express").Router();

router.use("/appointments", appointmentsRouter);
router.use("/technicians", techniciansRouter);
router.use("/boilersTypes", boilersTypeRouter);
router.use("/customers", customersRouter);
router.use('/buildings', buildingsRouter);
module.exports = router;
