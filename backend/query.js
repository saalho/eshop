var db = require('./database.js');
var bcrypt =  require('bcryptjs');
var webtoken = require('jsonwebtoken');
const ex_session = require('express-session');
const { expressionType } = require('@angular/compiler/src/output/output_ast');
require('dotenv').config();

exports.get_test = function (req, res, next) {
    console.log("controller works");
}
// for getting product categories
exports.get_categories = function (req, res, next) {
    console.log("Query to get main categories called");
    db.query("SELECT * FROM categories", (err, result, fields) =>{
        if (err) throw err;
        res.json(result);
        console.log("Query executed");
    })
}

// For creating a user
exports.signup = function(req, res, next){
    console.log("Query to add new user");
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpwd = bcrypt.hashSync(password,15);
    db.query("INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?,?);", [firstname,lastname,email,hashedpwd], (err) => {
        if (err) throw err;
        console.log("Query executed")
    });  
}
// For logging in and checking credentials
exports.login = async function(req,res, next){
    console.log("Query to login");
    const email = req.body.email;
    const password = req.body.password;
    let user = await db.promise().query("SELECT id, firstname, password FROM user WHERE email LIKE ?;",email);
    user = user[0][0];
    if(user == null) res.status(404).send({error: "credentials incorrect"});
    else if(!bcrypt.compareSync(password, user.password)) res.status(404).send({error: "credentials incorrect"});
    else {
        const userToken = {
            email: email,
            id: user.id
          }
        
        const token = 'bearer ' + generateAccessToken(userToken);
        user = {Authorization : token , Name: user.firstname};
        res.status(200).send(user);
    }
    function generateAccessToken(tokenUser){
        return webtoken.sign(tokenUser, process.env.TOKEN_SECRET, {expiresIn: '1800s'});
    }
}
//To add a sales notice
exports.addNotice = function(req, res, next){
    const header = req.body.header;
    const description = req.body.description;
    const category = req.body.category;
    const price = req.body.price;
    const userid = req.body.userid;
    const published = req.body.published;
    console.log("Query to add notice");
    db.query("INSERT INTO notices (header, description, cat_id, price, published, user_id) VALUES (?,?,?,?,?,?);",[header,description,category,price,published,userid], (err) =>{
        if (err) throw err;
        else res.status(200).send();
    })
}
exports.getNotices = function(req,res,next){
    console.log("Query to get notices");
    db.query("SELECT notices.id AS id, notices.header AS header, notices.description AS description, notices.price AS price, user.firstname AS name, notices.created AS created FROM notices INNER JOIN user ON notices.user_id=user.id WHERE notices.published=1;", (err, result, fields) =>{
        if (err) throw err;
        res.json(result);
        console.log("Query executed");
    })
}
exports.getNoticesById = function(req,res,next){
    const catId = req.body.id;
    console.log(catId);
    db.query("SELECT notices.id AS id, notices.header AS header, notices.description AS description, notices.price AS price, user.firstname AS name, notices.created AS created FROM notices INNER JOIN user ON notices.user_id=user.id WHERE notices.published=1 AND notices.cat_id="+catId+";", (err, result, fields) =>{ 
        if (err) throw err;
        res.json(result);
        console.log("Query executed");
    })
}

exports.isLoggedIn = function(req, res, next){
    var user = JSON.parse(sessionStorage.getItem("loggedUser")) || [];
     //TODO: verify login through database, log user out automatically after set time
}

exports.search = function(req,res,next){
    //TODO
}