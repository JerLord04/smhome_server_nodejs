const fs = require('fs');
const db = require('../database/connectDB')

exports.insertHandT = (req,res) => {
    const data = req.query
    const sql = 'INSERT INTO ht_table (date,hvalue,tvalue) VALUES ((NOW()),?,?)';
    const params = [data.humi,data.temp];
    db.query(sql, params, (error, results, fields) => {
        if (error) throw error;
        console.log("Humidity : " + data.humi + " %");
        console.log( "Temperaty : " +  data.temp + " c");
        console.log('Successfully inserted current datetime value into the database');
        res.send("Completed")
      });
    // console.log(data);
    
}