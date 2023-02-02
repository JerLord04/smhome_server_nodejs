const fs = require('fs');
const db = require('../../database/connectDB')

exports.deleteDuplicate = (req, res, next) => {
    console.log(req.body.room_id + " room id");
    const sql = `DELETE FROM devices WHERE id_sensor = ${req.body.sensor_id}`;
    db.query(sql, (err, result, fields) => {
        if (err) throw err;
        console.log("Delete successfully");
        next()
    })
    
}

