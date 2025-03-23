var express = require("express");
var app = express();
var PORT = 3000;
app.get("/", function (req, res) {
    res.send("Api working");
});
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
