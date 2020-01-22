var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;



app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.render("index");
})

app.get("/*", function (req, res) {
    res.render("error");
})

app.listen(PORT, function () {
    console.log("Serevr started on PORT : ", PORT);
})