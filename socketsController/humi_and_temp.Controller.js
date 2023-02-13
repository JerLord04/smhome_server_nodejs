const fs = require('fs');
const db = require('../database/connectDB')

exports.insertHandT = (req, res) => {
  const data = req.query
  const sql = 'INSERT INTO ht_table (room_id,senser_id,hvalue,tvalue,date) VALUES (?,?,?,?,(NOW()))';
  const params = [data.room, data.deviceid, data.humi, data.temp];
  db.query(sql, params, (error, results, fields) => {
    if (error) throw error;
    console.log("Humidity : " + data.humi + " %");
    console.log("Temperaty : " + data.temp + " c");
    console.log('Successfully inserted current datetime value into the database');
    if (data.deviceid === 'dhtroom1') {
      req.io.emit("Update ht value_1", {
        hvalue: data.humi,
        tvalue: data.temp
      })
    } else if (data.deviceid === 'dhtroom2') {
      req.io.emit("Update ht value_2", {
        hvalue: data.humi,
        tvalue: data.temp
      })
    } else if (data.deviceid === 'dhtroom3') {
      req.io.emit("Update ht value_3", {
        hvalue: data.humi,
        tvalue: data.temp
      })
    } else if (data.deviceid === 'dhtroom4') {
      req.io.emit("Update ht value_4", {
        hvalue: data.humi,
        tvalue: data.temp
      })
    }

    res.send("Insert value to database is completed.")
  });
  console.log(data);

}