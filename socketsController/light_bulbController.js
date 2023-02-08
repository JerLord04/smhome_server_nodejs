const fs = require('fs');

exports.light_bulb_command = (req, res) => {
    const data = req.query;
    console.log(data.status);
    if (data.status === 'on') {
        req.io.emit("light_bulb_control", ".Light ON");
    }else if(data.status === 'off'){
        req.io.emit("light_bulb_control", ".Light OFF");
    }
    res.send({
        "Status": `Light bulb has been turned ${data.status}`
    })
    // req.io.emit("light_bulb_control",".Light ON");
    // res.send({
    //     "Status": "Light bulb has been turned on."
    // })
}

