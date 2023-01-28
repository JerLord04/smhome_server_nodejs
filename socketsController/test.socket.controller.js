const fs = require('fs');
const db = require('../database/connectDB');

exports.testApi = (req, res) => {
    req.io.emit("hello", {content: req.body.content });
    return res.send({ success: true });
};