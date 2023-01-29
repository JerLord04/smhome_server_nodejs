const fs = require('fs');
const db = require('../database/connectDB');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.generate_token = (req, res) => {
    let pin = req.body.pin_num
    console.log(pin);
    const sql = 'SELECT * FROM pin_tb ORDER BY id DESC LIMIT 1;'
    db.query(sql, async (error, results) => {
        if (error) console.log(error);
        if ((await bcrypt.compare(pin, results[0].pincode))) {
            const payload = {
                userId: results[0].id,
                pin: results[0].pincode,
            };
            const options = {
                expiresIn: '60000'
            };
            const token = jwt.sign(payload, process.env.TOKEN_KEY, options);
            console.log("True");
            const response = {
                status: true,
                id: results[0].id,
                pin: results[0].pincode,
                token: token,
            }
            res.send(response)
        } else {
            const response = {
                status: false,
                msg: "Invalid"
            }
            console.log("False");
            res.send(response)
        }

    });
}

exports.verifyToken = (req, res) => {
    console.log("Verify");
    msg = {
      status : true,
      txt : "good_token"
    }
    res.send(msg)
}
