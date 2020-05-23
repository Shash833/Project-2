// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var order = {
  selectAll: function (cb) {
    orm.selectAll("item", function (res) {
      cb(res);
    });
  },
  findOne: function (username, cb) {
    orm.findOne(username, function (res) {
      cb(res);
    });
  },
  insertOne: function (cols, vals, cb) {
    orm.insertOne("user", cols, vals, function (res) {
      cb(res);
    });
  },

  insertOrder: function (cols, vals, cb) {
    orm.insertOne("orders", cols, vals, function (res) {
      cb(res);
    });
  },
  insertOrderItem: function (cols, vals) {
    orm.insertOrderItem("orderitem", cols, vals);
  },
  selectOrders: function (cb) {
    orm.selectAll("orders", function (res) {
      cb(res);
    });
  },
  //   updateOne: function (objColVals, condition, cb) {
  //     orm.updateOne("burgers", objColVals, condition, function (res) {
  //       cb(res);
  //     });
  //   },
};

// Export the database functions for the controller (controller.js).
module.exports = order;
