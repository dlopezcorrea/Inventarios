const express = require('express');
const{ getConnection} = require('./db/db-connection-mongo.js');

const app = express();
const port = 3000;

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