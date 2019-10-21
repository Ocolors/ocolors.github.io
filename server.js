"use strict";

// VARIABLE ASSIGNMENTS
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const PORT = (process.env.PORT === "" || process.env.PORT === null || process.env.PORT === undefined)? 4040 : process.env.PORT;

// APPLICATION SETUP
app.use("/", express.static(__dirname + "/public"));
server.listen(PORT, "0.0.0.0", function() {
    console.log(`Server currently running on port ${PORT}`);
});

// APPLICATION ROUTING
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/generatePage.html");
});