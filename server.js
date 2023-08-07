const express = require('express');
const Routes = require('./routes/userRoutes.js');
const app = express();

app.use(express.static('public'));

app.use('/', Routes);

app.listen();