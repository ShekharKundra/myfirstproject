var express = require("express");
var app = express();
var port = process.env.PORT || 4060;

app.set("view engine",);
app.use("/shekhar",function(req,res,next){
    console.log(req.params);
    next();
});

app.get("/shekhar", function (req, res) {
    res.send("<html><head></head><body><h1>shekar kundra</h1></body></html>");
});

app.get("/api", function (req, res) {
    res.json({ fname: "shekhar", lname: "kundra" })
});

app.get("/find/:id", function (req, res) {
    res.send("<html><head></head><body><h1>"+req.params.id+"</h1></body></html>");
});
app.listen(port);