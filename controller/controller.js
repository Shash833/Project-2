const express = require("express");
const router = express.Router();
const zomato = require("../models/zomato");

var order = require("../models/models.js");

//GET Route to display main page
router.get("/", function (req, res) {
  res.render("index");
});

//GET Route to display login page
router.get("/login", function (req, res) {
  res.render("login");
});

//GET Route to display registration page
router.get("/register", function (req, res) {
  res.render("register");
});

//GET Route to display restaurant list for location
router.get("/restaurants/:location", async function (req, res) {
  try {
    const inputLocation = req.params.location;
    const listR = await zomato.retrieveRestaurants(inputLocation);
    const db = {
      list: listR,
    };
    // console.log(db)
    res.render("restaurantList", db);
  } catch (err) {
    console.log(err);
  }
});

//GET Route to display restaurant page
router.get("/:restaurantID", async function (req, res) {
  try {
    const resID = req.params.restaurantID;
    const listR = await zomato.restaurantInformation(resID);
    const restaurantInfo = {
      restaurant: listR,
    };
    res.render("restaurant", restaurantInfo);
  } catch (err) {
    console.log(err);
  }
});

//GET Route to display order details page
router.get("/order/:id", async function (req, res) {
  res.render("confirmOrder");
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
