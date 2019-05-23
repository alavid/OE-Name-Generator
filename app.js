let http = require("http");
let fs = require("fs");
let path = require("path");
let express = require("express");

let app =express();
let port = process.env.PORT || 3000;

app.use(express.static(__dirname + 'Assets'));
app.use(express.static(path.join(__dirname, 'Assets')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, function() {
    console.log("== Server listening on port " + port);
});
