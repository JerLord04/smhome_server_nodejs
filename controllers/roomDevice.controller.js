const fs = require('fs');
const db = require('../database/connectDB')

exports.rooldataRoom1 = (req, res) => {
    db.query('SELECT * FROM sensor LEFT JOIN devices ON sensor.id = devices.id_sensor WHERE devices.id_room = 1;', (error, results) => {
        if (error) console.log(error);
        res.send(results);
        console.log(results)
      });
};

exports.rooldataRoom2 = (req, res) => {
    db.query('SELECT * FROM sensor LEFT JOIN devices ON sensor.id = devices.id_sensor WHERE devices.id_room = 2;', (error, results) => {
        if (error) console.log(error);
        res.send(results);
        console.log(results)
      });
};

exports.rooldataRoom3 = (req, res) => {
    db.query('SELECT * FROM sensor LEFT JOIN devices ON sensor.id = devices.id_sensor WHERE devices.id_room = 3;', (error, results) => {
        if (error) console.log(error);
        res.send(results);
        console.log(results)
      });
};

exports.rooldataRoom4 = (req, res) => {
    db.query('SELECT * FROM sensor LEFT JOIN devices ON sensor.id = devices.id_sensor WHERE devices.id_room = 4;', (error, results) => {
        if (error) console.log(error);
        res.send(results);
        console.log(results)
      });
};

