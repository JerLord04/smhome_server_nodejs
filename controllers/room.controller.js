const fs = require('fs');
const db = require('../database/connectDB')

exports.getRoomName = (req, res) => {
    data = req.body;
    console.log(data.room_id);
    db.query(`SELECT * FROM room_tb WHERE id = ${data.room_id}`, (error, results) => {
        if (error) console.log(error);
        res.send(results);
        console.log(results)
    });
}

exports.getAllRoomName = (req, res) => {
    db.query(`SELECT * FROM room_tb`, (error, results) => {
        if (error) console.log(error);
        res.send(results);
        console.log(results)
    });
}

exports.changeRoomName = (req, res) => {
    const data = req.body;
    console.log(data);
    const sql = `UPDATE room_tb SET name = ? WHERE id = ?`;
    const params = [data.newname, data.room_id];
    db.query(sql, params, (error, results, fields) => {
        if (error) throw error;
        console.log("Update successful");
        msg = {
            newname: data.newname,
            status: 'Rename successful',
        }
        res.send(msg);
    })
}



