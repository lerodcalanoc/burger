var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.static(process.cwd() + "/"));
app.use(bodyParser.urlencoded({ extended: false }));
// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);
// app.listen(port);
app.listen(PORT, function() {
  console.log("Burger app is listening on PORT: " + PORT);
});