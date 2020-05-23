$(function () {
  // const path = require("path");
  //event listener for city search button on homepage
  $(".searchCity").on("click", function (event) {
    console.log("clicked");
    const city = $("#inputCity").val().trim();
    //load search results when button is clicked
    if (city) {
      location.assign(`restaurants/${city}`);
    }
  });

  //event listener for search result selection
  $(".restaurant").on("click", function (event) {
    let restaurantID = parseInt($(this).data("id"));
    //load restaurant page when button is clicked
    location.assign(`../${restaurantID}`);
  });

  $("#orderId").on("click", function (event) {
    event.preventDefault();

    // const order = getOrder();
    var checked = 0;
    const sendOrder = getOrder(checked);

    location.assign(`/order/confirmorder/${sendOrder}`);

    // $.ajax("/order/confirmorder/sendOrder", {
    //   type: "POST",
    //   data: sendOrder,
    // }).then(function () {
    //   location.reload("/");
    // });
  });

  function getOrder(checked) {
    var nameClass = document.getElementsByClassName("itemName");
    var quantityClass = document.getElementsByClassName("quantity");
    var quantitySizeClass = document.getElementsByClassName("quantitySize");
    var priceClass = document.getElementsByClassName("price");
    var itemIdClass = document.getElementsByClassName("itemId");

    if (checked === 1) {
      var pickupDatetime = document.getElementById("datetime").value.trim();
      alert("date time is:" + pickupDatetime);
    }

    var itemIds = [];
    var itemquantitySize = [];
    var itemNames = [];
    var itemQuantity = [];
    var itemPrice = [];
    var totalPrice = 0;

    for (const i of itemIdClass) {
      itemIds.push(i.textContent.trim());
    }
    for (const qs of quantitySizeClass) {
      itemquantitySize.push(qs.textContent.trim());
    }
    for (const n of nameClass) {
      itemNames.push(n.textContent.trim());
    }

    for (const q of quantityClass) {
      if (checked === 0) {
        if (parseInt(q.value) > 0) itemQuantity.push(q.value.trim());
      }
      if (checked === 1) {
        if (parseInt(q.textContent) > 0)
          itemQuantity.push(q.textContent.trim());
      }
    }

    for (const p of priceClass) {
      itemPrice.push(p.textContent.trim());
      totalPrice += parseInt(itemPrice);
    }
    let totalPrices = 0;
    let subTotal = [];
    for (var i = 0; i < quantityClass.length; i++) {
      var price = priceClass[i].textContent.trim();

      if (checked === 0) var quantity = quantityClass[i].value.trim();
      if (checked === 1) var quantity = quantityClass[i].textContent.trim();

      price = parseInt(price);
      quantity = parseInt(quantity);
      if (quantity > 0) {
        totalPrices += price * quantity;
        subTotal.push(price * quantity);
      }
    }
    alert("Subtotal is:" + subTotal);
    var order = {
      id: itemIds,
      quantitySize: itemquantitySize,
      name: itemNames,
      quantity: itemQuantity,
      price: itemPrice,
      subTotal: subTotal,
      totalPrice: totalPrices,
      pickupDatetime: pickupDatetime,
    };
    alert("Inside function buddy...");
    const sendOrder = JSON.stringify(order);
    return sendOrder;
  }

  $(".submitFinalorder").on("click", function (event) {
    event.preventDefault();
    var checked = 1;
    const sendOrder = getOrder(checked);
    location.assign(`/order/finalOrder/${sendOrder}`);
  });

  $(".viewHistorylink").on("click", function (event) {
    event.preventDefault();
    alert("clicked yes...");
    const customerId = "3";
    location.assign(`/vieworders/${customerId}`);
  });

  $("#orderId").on("click", function (event) {
    event.preventDefault();

    // const order = getOrder();
    var checked = 0;
    const sendOrder = getOrder(checked);

    location.assign(`/order/confirmorder/${sendOrder}`);

    // $.ajax("/order/confirmorder/sendOrder", {
    //   type: "POST",
    //   data: sendOrder,
    // }).then(function () {
    //   location.reload("/");
    // });
  });

  function getOrder(checked) {
    var nameClass = document.getElementsByClassName("itemName");
    var quantityClass = document.getElementsByClassName("quantity");
    var quantitySizeClass = document.getElementsByClassName("quantitySize");
    var priceClass = document.getElementsByClassName("price");
    var itemIdClass = document.getElementsByClassName("itemId");

    if (checked === 1) {
      var pickupDatetime = document.getElementById("datetime").value.trim();
      alert("date time is:" + pickupDatetime);
    }

    var itemIds = [];
    var itemquantitySize = [];
    var itemNames = [];
    var itemQuantity = [];
    var itemPrice = [];
    var totalPrice = 0;

    for (const i of itemIdClass) {
      itemIds.push(i.textContent.trim());
    }
    for (const qs of quantitySizeClass) {
      itemquantitySize.push(qs.textContent.trim());
    }
    for (const n of nameClass) {
      itemNames.push(n.textContent.trim());
    }

    for (const q of quantityClass) {
      if (checked === 0) {
        if (parseInt(q.value) > 0) itemQuantity.push(q.value.trim());
      }
      if (checked === 1) {
        if (parseInt(q.textContent) > 0)
          itemQuantity.push(q.textContent.trim());
      }
    }

    for (const p of priceClass) {
      itemPrice.push(p.textContent.trim());
      totalPrice += parseInt(itemPrice);
    }
    let totalPrices = 0;
    let subTotal = [];
    for (var i = 0; i < quantityClass.length; i++) {
      var price = priceClass[i].textContent.trim();

      if (checked === 0) var quantity = quantityClass[i].value.trim();
      if (checked === 1) var quantity = quantityClass[i].textContent.trim();

      price = parseInt(price);
      quantity = parseInt(quantity);
      if (quantity > 0) {
        totalPrices += price * quantity;
        subTotal.push(price * quantity);
      }
    }
    alert("Subtotal is:" + subTotal);
    var order = {
      id: itemIds,
      quantitySize: itemquantitySize,
      name: itemNames,
      quantity: itemQuantity,
      price: itemPrice,
      subTotal: subTotal,
      totalPrice: totalPrices,
      pickupDatetime: pickupDatetime,
    };
    alert("Inside function buddy...");
    const sendOrder = JSON.stringify(order);
    return sendOrder;
  }

  $(".submitFinalorder").on("click", function (event) {
    event.preventDefault();
    var checked = 1;
    const sendOrder = getOrder(checked);
    location.assign(`/order/finalOrder/${sendOrder}`);
  });

  $(".viewHistorylink").on("click", function (event) {
    event.preventDefault();
    alert("clicked yes...");
    const customerId = "3";
    location.assign(`/vieworders/${customerId}`);
  });
});
