const express = require("express")
const router = express.Router();

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


//Export routes
module.exports = router;
