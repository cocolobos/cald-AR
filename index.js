const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000
app.use('/', require ('./controllers/technicians'));
app.listen (PORT, () => console.log("hi"));
