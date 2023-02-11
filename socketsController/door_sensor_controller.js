const fs = require('fs');

exports.door_status = (req,res) => {
    var status_door;
    var data;
    if(!req.query)return res.status(400).send({ error: 'Missing required parameter `someParam`.' });
    const statusOfdoor = req.query;
    if(statusOfdoor.door_status === 'door_close'){
        data = {
            status_door : "CLOSE"
        }
    }else if(statusOfdoor.door_status === 'door_open'){
        data = {
            status_door : "OPEN"
        }
    }
    req.io.emit("door_status",data);
    res.send({
        "status" : true
    })
    console.log(statusOfdoor);
}   