//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const d = new Date();
let year = d.getFullYear();
let hour = d.getHours();
let date = d.toDateString();
let time = d.toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true });

let waterQulityFlag = false;

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// GET routings

app.get("/", function(req, res){
  res.render("home");
});

app.get("/login", function(req, res){
  res.render("login");
});

app.get("/register", function(req, res){
  res.render("register");
});

app.get("/energy", function(req, res){
  res.render("energy", {currentYear: year});
});

app.get("/qulity", function(req, res){
    res.render("qulity", {currentYear: year, currentDate: date, currentHour: hour});
});

app.get("/jar", function(req, res){
  res.render("jar", {currentYear: year, currentDate: date});
});

app.get("/motor", function(req, res){
  res.render("motor", {currentYear: year});
});

app.get("/productionWtp", function(req, res){
  res.render("productionWtp", {currentYear: year});
});

app.get("/productionRes", function(req, res){
  res.render("productionRes", {currentYear: year});
});

// POST routings

 app.post("/energy", function(req, res){
    res.redirect("/");
 });


// Server running routing
app.listen(3000, function() {
  console.log("Server started on port 3000");
});
