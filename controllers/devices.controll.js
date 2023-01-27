const fs = require('fs');
const db = require('../database/connectDB');

exports.insert_device = (req, res) => {
    const data = req.body;
    console.log(data);
    const sql = `INSERT INTO devices( id_room, id_sensor) VALUES (${data.room_id},${data.sensor_id})`;
    db.connect(function (err) {
        db.query(sql, function (err, result, fields) {
            if (err) {
                res.send(err);
                throw err;
            }
            console.log(result);
            data_res = {
                'status': true,
                'msg': 'Device added successfully'
            }
            res.send(data_res);
            console.log("insert completed");
        });
    });
};

exports.delete_device = (req, res) => {
    const data = req.body;
    console.log(data.room_id)
    const sql = `DELETE FROM devices WHERE id = ${data.room_id}`;
    db.connect(function (err) {
        db.query(sql, function (err, result, fields) {
            if (err) throw err;
            const data_result = {
                'status': true,
                'msg': 'Successful device remove'
            }
            res.send(data_result)
        });
    });
};