const fs = require('fs');
const db = require('../database/connectDB');
const bcrypt = require('bcryptjs')

exports.insert_pin = async (req, res) => {
    console.log(req.body.pin_num);
    encryptedPassword = await bcrypt.hash(req.body.pin_num, 10)
    const sql = 'INSERT INTO pin_tb (pincode) VALUES (?)';
    const params = [encryptedPassword];
    db.query(sql, params, (error, results, fields) => {
        if (error) throw error;
        console.log("Insert successfully");
        msg = {
            status: true,
            txt: "Insert successfully"
        }
        res.send(msg)
    })
}

exports.count_pin = async (req, res) => {
    const sql = 'SELECT COUNT(id) as count FROM pin_tb;'
    db.query(sql, (error, results) => {
        console.log(results[0].count);
        const count_data = {
            count: results[0].count
        }
        res.send(count_data);
    });
}