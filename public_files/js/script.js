$(function () {
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

  //TODO: BELOW TODO'S & NEED TO FINALISE DB TABLES FOR MENU ITEMS
  //confirm order button
  $(".confirm_order").on("click", function (event) {
    //TODO: retrieve order id
    //let itemId = parseInt($(this).data("#switchRtlExample"));
    // let itemId = $("#switchRtlExample").value();
    let itemId = document.getElementById("#switchRtlExample").checked;
    alert("item id is:", itemId);
    //TODO: select menu selections (for menu selections, retrieve restaurant ID, item ID and quantity)
    location.assign(`order/placeholder`);
    //TODO: replace placeholder with order ID
  });
});
