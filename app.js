//jshint esversion:6

const express = require ("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.get("/", function(req, res){

  var today = new Date();
  var currentDate = today.getDay();

  if (currentDate === 6 || currentDate === 0) {
    res.sendFile(__dirname + "/weekend.html");
  } else {
    res.sendFile(__dirname + "/weekday.html");
  }
});

app.listen(port, function(){
  console.log("Server started on port " + port);
});
