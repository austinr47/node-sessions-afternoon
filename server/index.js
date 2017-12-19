const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const session = require('express-session');
const checkForSession = require('../server/middlewares/checkForSession');
const sc = require('./controllers/swag_controller');

const app = express();

app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(checkForSession);


app.get(`/api/swag`, sc.read)

const port = 3000
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );