//Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

//Express
var app = express();

//Define PORT
var PORT = process.env.PORT || 8080;

// Handlebars setup
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes 
var routes = require("./controller/controller.js");
app.use(routes);

// Static content
app.use(express.static("public_files"));

// Start server
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
