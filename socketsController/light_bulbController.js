const fs = require('fs');

exports.light_bulb_command_on = (req, res) => {
    const data = req.query;
    console.log(data.status);
    // req.io.emit(`light_bulb_control${data.status}`, ".Light ON");

    // console.log(data.status);
    if (data.status === "light_bulb01") {
        req.io.emit(`light_bulb_control_l1`, ".Light ON1");
    } else if (data.status === "light_bulb02") {
        req.io.emit(`light_bulb_control_l2`, ".Light ON2");
    } else if (data.status === "light_bulb03") {
        req.io.emit(`light_bulb_control_l3`, ".Light ON3");
    } else if (data.status === "light_bulb04") {
        req.io.emit(`light_bulb_control_l4`, ".Light ON4");
    }
    res.send({
        "Status": `Light bulb has been turned on`
    })

}

exports.light_bulb_command_off = (req, res) => {
    const data = req.query;
    console.log(data.status);
    if (data.status === "light_bulb01") {
        req.io.emit(`light_bulb_control_l1`, ".Light OFF1");
    } else if (data.status === "light_bulb02") {
        req.io.emit(`light_bulb_control_l2`, ".Light OFF2");
    } else if (data.status === "light_bulb03") {
        req.io.emit(`light_bulb_control_l3`, ".Light OFF3");
    } else if (data.status === "light_bulb04") {
        req.io.emit(`light_bulb_control_l4`, ".Light OFF4");
    }
    res.send({
        "Status": `Light bulb has been turned off`
    })
}


