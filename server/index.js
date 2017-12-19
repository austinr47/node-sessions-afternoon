const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const session = require('express-session');
const checkForSession = require('../server/middlewares/checkForSession');
const sc = require('./controllers/swag_controller');
const ac = require('./controllers/auth_controller');


const app = express();

app.use( bodyParser.json() );
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(checkForSession);


app.get(`/api/swag`, sc.read);
app.post(`/api/login`, ac.login);
app.post(`/api/register`, ac.register);
app.post(`/api/signout`, ac.signout);
app.get(`/api/user`, ac.getUser);


const port = 3000
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );

