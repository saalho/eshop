require('dotenv').config();
const express = require('express');
const ex_session = require('express-session');
const bodyparser = require('body-parser');
const myquery = require('./query.js');

const port = process.env.EX_PORT;
const secret = process.env.EX_SECRET;

const app = express();

app.use(bodyparser.json());
app.use(ex_session({
    secret: secret,
    saveUninitialized: false,
    resave:false
}))
app.listen(port,() => {
    console.log("Backend Express-server started at " + port);
})

app.get('/test', myquery.get_test);
app.get('/getcategories', myquery.get_categories);
app.post('/register', myquery.signup);
app.post('/login', myquery.login);
app.post('/checklogin', myquery.isLoggedIn);
app.post('/addnotice', myquery.addNotice);
app.get('/getnotices', myquery.getNotices);
app.post('/getnoticesbyid', myquery.getNoticesById);
app.post('/search', myquery.search);