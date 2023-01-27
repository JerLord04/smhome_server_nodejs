const fs = require('fs');
const db = require('../database/connectDB');
const moment = require('moment');

exports.get_humidity_data = (req, res) => {
    const room_detail = req.query;
    console.log(room_detail.room_id);
    const sql = `SELECT * FROM humidity_tb WHERE room_id = ${room_detail.room_id} ORDER BY id DESC LIMIT 5;`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        for (const show_data in results) {
            const converted = moment(results[show_data].date, 'YYYY-MM-DD HH:mm:ss').format('MMMM Do YYYY h:mm:ss a');
            results[show_data].date = converted;
        }
        console.log(results);
        res.send(results);
    });
};

exports.get_temperature_data = (req, res) => {
    const room_detail = req.query;
    console.log(room_detail.room_id);
    const sql = `SELECT * FROM temperature_tb WHERE room_id = ${room_detail.room_id} ORDER BY id DESC LIMIT 5;`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        for (const show_data in results) {
            const converted = moment(results[show_data].date, 'YYYY-MM-DD HH:mm:ss').format('MMMM Do YYYY h:mm:ss a');
            results[show_data].date = converted;
        }
        console.log(results);
        res.send(results);
    });
};

