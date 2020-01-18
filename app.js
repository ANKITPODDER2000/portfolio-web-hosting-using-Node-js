var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;
var mongoose = require("mongoose");
var bodyParser = require("body-parser");


mongoose.connect(
  "mongodb+srv://ankit:ankit2000@cluster0-jq8ox.mongodb.net/test?retryWrites=true&w=majority"
);

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
})

app.listen(PORT, function () {
    console.log("Serevr started on PORT : ", PORT);
})