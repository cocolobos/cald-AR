const express = require("express");
const dotenv = require('dotenv')
const db = require("./app/models");
const app = express();
const router = require("./app/routes");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

dotenv.config();
const PORT = process.env.PORT || 4000;

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
