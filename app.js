//jshint esversion:6

const express = require ("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

let items = [];
let workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded());
app.use(express.static("public"));

app.get("/", function(req, res){

  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  };

  let day = today.toLocaleDateString("en-US", options);

  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
  
  let item = req.body.newItem;

  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
      items.push(item);
      res.redirect("/");
    }
});

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.listen(port, function(){
  console.log("Server started on port " + port);
});
