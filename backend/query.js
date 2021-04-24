var db = require('./database.js');
require('dotenv').config();

exports.get_test = function (req, res, next) {
    console.log("controller works");
}
exports.get_categories = function (req, res, next) {
    console.log("Query to get main categories called");
    db.query("SELECT * FROM categories", (err, result, fields) =>{
        if (err) throw err;
        res.json(result);
        console.log("Query executed");
    })
}
exports.get_subcategories = function(req, res, next){
    console.log("Query to get subcategories called");
    const catId = req.body.id;
    db.query("SELECT * FROM subcategories where cat_id = " +catId+ ";", (err, result, fields) => {
        if (err) throw err;
        res.json(result);
        console.log("Query executed")
    })
}