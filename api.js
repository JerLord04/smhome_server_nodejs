const express = require("express");

const Router = express.Router();

// Very simple example
Router.post("/connect", (req, res) => {
    // You can do validation or database stuff before emiting

    req.io.emit("hello", {content: req.body.content });
    return res.send({ success: true });
});

module.exports = Router;
