const { route } = require('./appointments');
const appointmentsRouter = require('./appointments')

var router = require("express").Router();

router.use('./appointments', appointmentsRouter)

module.exports = router;