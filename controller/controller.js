const express = require("express");
const router = express.Router();
const zomato = require("../models/zomato");
const bcrypt = require("bcrypt");
const fs = require("fs");

const store = require("data-store")({ path: process.cwd() + "/store.json" });
var order = require("../models/models.js");
var moment = require("moment");

//GET Route to display main page
router.get("/", function (req, res) {
  res.render("login");
});

//GET Route to display login page
router.get("/search", function (req, res) {
  res.render("index");
});

//GET Route to display registration page
router.get("/register", function (req, res) {
  res.render("register");
});

router.get("/vieworders/:customerId", function (req, res) {
  // try {
  //   const resID = req.params.restaurantID;
  //   const listR = await zomato.restaurantInformation(resID);

  //   order.selectAll(function (data) {
  //     const restaurantInfo = {
  //       restaurant: listR,
  //       item: data,
  //     };
  //     res.render("viewOrders");
  //     // res.render("restaurant", restaurantInfo);
  //   });
  // } catch (err) {
  //   console.log(err);
  // }
  res.render("viewOrders");
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
    //retrieve restaurant information
    const listR = await zomato.restaurantInformation(resID);
    order.selectAll(function (data) {
      const restaurantInfo = {
        restaurant: listR,
        item: data,
      };
      //render restaurant information to html
      res.render("restaurant", restaurantInfo);
    });
  } catch (err) {
    console.log(err);
  }
});

//GET Route to display order details page
router.get("/order/:id", async function (req, res) {
  res.render("confirmOrder");
});

//POST route to submit registration details
router.post("/api/register", async function (req, res) {
  try {
    const password = await bcrypt.hash(
      req.body.password,
      bcrypt.genSaltSync(1),
      null
    );
    order.insertOne(
      [
        "username",
        "password",
        "firstname",
        "lastname",
        "usertype",
        "customerId",
      ],
      [
        req.body.username,
        password,
        req.body.firstname,
        req.body.lastname,
        "registered",
        4,
      ],

      await function (result) {
        console.log("Data is inserted....");
        res.json({ id: result.insertId });
      }
    );
  } catch (err) {
    console.log(err);
  }
});

//POST route to log in
router.post("/api/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  function comparePassword(users) {
    //compare retreived usernames from DB to check if there is a password match
    for (let i = 0; i < users.length; i++) {
      //Check if hashed version of login password matches hashed version of password in databse
      if (bcrypt.compareSync(password, users[i].password)) {
        //Store user details to fs to maintain user session
        const sessionData = JSON.stringify(users[i]);
        fs.writeFile("serverFiles/session.json", sessionData, function (err) {
          if (err) throw err;
          console.log("Session updated");
        });
        //redirect to search page if password matches
        res.redirect("/search");
        return;
      } else {
        console.log("no match");
      }
    }
  }
  order.findOne(username, function (data) {
    const users = data;
    comparePassword(users);
  });
});

router.delete("/logout", function (req, res) {
  const empty = [];
  fs.writeFile("serverFiles/session.json", empty, function (err) {
    if (err) throw err;
    console.log("User logout");
  });
  res.redirect("/");
});

//Export routesc
module.exports = router;
