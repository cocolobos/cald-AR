const mongoose = require("mongoose");
const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_URL;

db.appointments = require("./appointments.js")(mongoose);
db.technicians = require("./technicians.js")(mongoose);
db.boilersTypes=require("./boilers-types")(mongoose);
db.customers = require("./customers.js")(mongoose);
db.appointments = require("./buildings")(mongoose);

module.exports = db;