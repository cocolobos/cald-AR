const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_URL;
db.appointments = require("./appointments.js")(mongoose);
db.techinicians = require("./technicians.js")(mongoose);

module.exports = db;