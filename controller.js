const express = require("express");
const router = express.Router();

var order = require("../models/models.js");

//GET Route to display main page
router.get("/", function (req, res) {
  //call 'selectAll' method to retrieve all database entries
  res.render("index");
});

//GET Route to display login page
router.get("/login", function (req, res) {
  //call 'selectAll' method to retrieve all database entries
  res.render("login");
});

//GET Route to display registration page
router.get("/register", function (req, res) {
  //call 'selectAll' method to retrieve all database entries
  res.render("register");
});

//GET Route to display restaurant page
router.get("/:restaurant", function (req, res) {
  //call 'selectAll' method to retrieve all database entries
  res.render("restaurant");
});

router.post("/api/order", function (req, res) {
  order.insertOne(
    ["username", "password", "firstname", "lastname", "usertype", "customerId"],
    [
      req.body.username,
      req.body.password,
      req.body.firstname,
      req.body.lastname,
      "registered",
      4,
    ],
    function (result) {
      console.log("Data is inserted....");
      res.json({ id: result.insertId });
    }
  );
});

//Export routes
module.exports = router;
