const express = require ('express');
const app = express();
const PORT = process.env.PORT || 5000
// Buldings Functions
app.use('/api/buldings', require('./controller/getBuildingsAll'));
app.use('/api/buldings/', require('./controller/getBuildingById'));
app.use('/api/buldings/', require('./controller/getBuildingsByAttribute'));
app.use('/api/buldings/', require('./controller/deleteBuildingById'));

app.listen (PORT, () => console.log("hi"));
