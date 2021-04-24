require('dotenv').config();
const mysql = require('mysql2');
// Add .env file to backend-directory
const host = process.env.DB_HOST;
const dbname = process.env.DB_NAME;
const user = process.env.DB_USER;
const pwd = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
var db;

function connectdb() {
    if(!db){
        db = mysql.createPool({
            connectionLimit : 100,
            host: host,
            port: port,
            user: user,
            password: pwd,
            database: dbname,
        })
        db.getConnection(function(err, connection){
            if (err){
                console.log('Unable to connect to server ' + host);
                console.log(err);
                return;
            }
            console.log('Connection to server ' + host + port +' established. ID ' + connection.threadId);
        })
    }
    return db;
}

module.exports = connectdb();