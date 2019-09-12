//jshint esversion:6

const express = require ("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get("/", function(req, res){

  var today = new Date();
  var currentDate = today.getDay();
  var day = "";

  if (currentDate === 6 || currentDate === 0) {
    day = "Weekend";
  } else {
    day = "Weekday";
  }
  res.render("list", {kindOfDay: day});
});

app.listen(port, function(){
  console.log("Server started on port " + port);
});
