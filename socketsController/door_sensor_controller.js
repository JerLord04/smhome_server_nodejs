const fs = require('fs');
const db = require('../database/connectDB')

exports.door_status = (req,res) => {
    var status_door;
    var data;
    if(!req.query)return res.status(400).send({ error: 'Missing required parameter `someParam`.' });
    const statusOfdoor = req.query;
    console.log(statusOfdoor.room);
    const sql = 'INSERT INTO door_state (room_id,date,status) VALUES (?,(NOW()),?)';
    const params = [statusOfdoor.room,statusOfdoor.door_status];
    db.query(sql, params, (error, results, fields) => {
        if (error) throw error;
        console.log("Insert to database completed");
    });
    if(statusOfdoor.door_status === 'door_close'){
        data = {
            status_door : "CLOSE"
        }
    }else if(statusOfdoor.door_status === 'door_open'){
        data = {
            status_door : "OPEN"
        }
    }
    if(statusOfdoor.room === '1'){
        req.io.emit("door_status1",data);
    }else if(statusOfdoor.room === '2'){
        req.io.emit("door_status2",data);
    }else if(statusOfdoor.room === '3'){
        req.io.emit("door_status3",data);
    }else if(statusOfdoor.room === '4'){
        req.io.emit("door_status4",data);
    }
    res.send({
        "status" : true
    })
    console.log(statusOfdoor);
}   

exports.doorLastestState = (req,res) => {
    const room_id = req.query.room_id;
    const sql = `SELECT * FROM door_state WHERE room_id = ${room_id} ORDER BY id DESC LIMIT 1;`;
    db.query(sql, (error, results, fields) => {
        if (error) throw error;
        console.log(results);
        res.send(results);
    });
}