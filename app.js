//jshint esversion:6

const express = require ("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, function(){
  console.log("Server started on port " + port);
});
