let mysql = require('mysql');
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "&6BA![,naF",
    database : "smarthome_project"
});

connection.connect((error) => {
    if(!!error){
        console.log(error);
    }else{
        console.log("Connected...to database");
    }
});

module.exports = connection;