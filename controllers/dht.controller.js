const fs = require('fs');
const db = require('../database/connectDB');
const moment = require('moment');

exports.insertRoomInHTtable = (req,res) => {
    const room_id = req.query.room_id;
    const sql = `UPDATE ht_table SET room_id = ${room_id} WHERE room_id = 0`;
    db.query(sql,(err,result,fields) => {
        return res.send(result)
    })
}

exports.getHTvalue = (req,res) => {
    const room_id = req.query.room_id;
    console.log(room_id);
    const sql = `SELECT * FROM ht_table WHERE room_id = ${room_id} ORDER BY id DESC LIMIT 5;`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        for (const show_data in results) {
            const converted = moment(results[show_data].date, 'YYYY-MM-DD HH:mm:ss').format('MMMM Do YYYY h:mm:ss a');
            results[show_data].date = converted;
        }
        console.log(results);
        return res.send(results);
    });
}

exports.getLatesHumidityAndTemperature = (req,res) => {
    const data = req.query
    const sql = `SELECT hvalue,tvalue FROM ht_table WHERE room_id = ${data.room_id} ORDER BY id DESC LIMIT 1`;
    db.query(sql,(error,result,fields) => {
        if(error) throw error;
        console.log(result);
        res.send(result)
    })
}

