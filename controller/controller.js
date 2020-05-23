const express = require("express");
const router = express.Router();
const zomato = require("../models/zomato");

const bcrypt = require("bcrypt");
const fs = require("fs");

const store = require("data-store")({ path: process.cwd() + "/store.json" });
var order = require("../models/models.js");

var moment = require("moment");

var order = require("../models/models.js");
// var Items = require("../models/items.js");
//GET Route to display main page
router.get("/", function (req, res) {
  res.render("login");
});


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
// router.get("/order/:id", async function (req, res) {
//   res.render("confirmOrder");
// });

router.get("/order/confirmorder/:sendOrder", function (req, res) {
  // try {
  console.log("first req.body.id using post is:", req.params.sendOrder);
  console.log("Id is:", req.params.sendOrder.id);
  // fs.writeFile("itemsOrdered.json", req.params.sendOrder, function (err) {
  //   if (err) throw err;
  //   console.log("items ordered...");
  // });

  // await writeJsonFile("foo.json", req.params.sendOrder);

  const data = req.params.sendOrder;
  const parseData = JSON.parse(data);
  // console.log("parse data is:", parseData);
  const fullOrder = {
    order: parseData,
  };
  // console.log("full order is:", fullOrder);

  res.render("confirmOrder", fullOrder);
  // } catch (err) {
  //   console.log(err);
  // }
});

router.get("/order/finalOrder/:sendOrder", async function (req, res) {
  // try {
  try {
    console.log("first req.body.id using post is:", req.params.sendOrder);
    // console.log("Id is:", req.params.sendOrder.id);

    const data = req.params.sendOrder;
    const parseData = JSON.parse(data);
    // console.log("parse data is:", parseData);
    const fullOrder = {
      order: parseData,
    };

    const { pickupDatetime } = fullOrder.order;
    const quantity = fullOrder.order.quantity;

    var totalQuantity = quantity.reduce((total, a) => total + parseInt(a), 0);

    const orderDate = moment().format();
    var resultId;

    order.insertOrder(
      ["orderDate", "customerId", "quantity", "pickupDate"],
      [orderDate, 3, totalQuantity, orderDate],

      await function (result) {
        console.log("Data is inserted....");
        console.log("Created id is:" + result.insertId);
        // res.json({ id: result.insertId });
        resultId = result.insertId;
        console.log("result id is: ", resultId);
        store.set({ orderId: resultId });

        console.log("store.get() is: ", store.get());
        console.log("store.data: ", store.data);
        console.log("store.data.orderId: ", store.data.orderId);

        const quantity = fullOrder.order.quantity;
        const price = fullOrder.order.price;
        const itemId = fullOrder.order.id;

        for (var i = 0; i < itemId.length; i++) {
          const itemIdDb = itemId[i];
          const orderIdDb = store.data.orderId;
          const quantityDb = quantity[i];
          const priceDb = price[i];

          order.insertOrderItem(
            ["quantity", "price", "itemId", "orderId"],
            [quantityDb, priceDb, itemIdDb, orderIdDb]

            // function (result) {
            //   console.log("Data is inserted....");
            //   console.log("Created order item id is:" + result.insertId);
            //   // res.json({ id: result.insertId });
            //   res.render("index");
            //   // location.assign(`/`);
            // }
          );
        }

        res.render("index");
        // location.assign(`/`);
      }
    );

    //    console.log("Moment.format is:", moment().format());
    // order.insertorderItem(
    //   ["quantity", "price", "itemId", "orderId"],
    //   [2, 6, 2, 4],

    //   await function (result) {
    //     console.log("Data is inserted....");
    //     console.log("Created id is:" + result.insertId);
    //     // res.json({ id: result.insertId });
    //     res.render("index");
    //     // location.assign(`/`);
    //   }
    // );
    //alert("Order placed successfully.....!!!");
    // res.render("index");
  } catch (err) {
    console.log(err);
  }
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

module.exports = router;
