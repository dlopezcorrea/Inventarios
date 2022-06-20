const express = require('express');
const{ getConnection} = require('./db/db-connection-mongo.js');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());

getConnection();

app.use(express.json()); // for parsing application/json

app.use('/user',require('./router/user'));
app.use('/equipment-status',require('./router/equipmentStatus'));
app.use('/brand',require('./router/brand'));
app.use('/equipment-type',require('./router/equipmentType'));
app.use('/inventory',require('./router/inventory'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  });