require('dotenv').config();
const express = require('express');
const ex_session = require('express-session');
const bodyparser = require('body-parser');
const myquery = require('./query.js');

const app = express();

app.use(bodyparser.json());

app.listen(3000,() => {
    console.log("Backend Express-server started at 3000");
})

app.get('/test', myquery.get_test);
app.get('/getcategories', myquery.get_categories);
app.post('/getsubcategories', myquery.get_subcategories)