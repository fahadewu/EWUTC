const express = require('express');
const Routes = require('./routes/userRoutes.js');
const app = express();
const cors = require('cors');
app.use(express.static('public'));

app.use('/', Routes);
app.use(cors("https://dev.ewutc.com"));


app.listen();