$(function () {
  $("#submitForm").on("click", function (event) {
    event.preventDefault();
    alert("pressed submit mate....");

    // var id = $(this).data("id");
    // var devoured = {
    //   devoured: true,
    // };
    // // PUT request.
    // $.ajax("/api/burgers/" + id, {
    //   type: "PUT",
    //   data: devoured,
    // }).then(function () {
    //   // Reload the page to get the updated list
    //   location.reload();
    // });
  });

  $("#registerSubmit").on("click", function (event) {
    event.preventDefault();
    alert("register submit mate....");
    // var firstName = $("#createFirstName").val().trim();
    // var lastName = $("#createLastName").val().trim();
    // var userName = $("#createUsername").val().trim();
    // var password = $("#createPassword").val().trim();
    var newUser = {
      username: $("#createUsername").val().trim(),
      password: $("#createPassword").val().trim(),
      firstname: $("#createFirstName").val().trim(),
      lastname: $("#createLastName").val().trim(),
    };
    // POST request.
    $.ajax("/api/order", {
      type: "POST",
      data: newUser,
    }).then(function () {
      location.reload("/");
    });
    // alert(firstName);
  });

  //   $("#create-form").on("submit", function (event) {
  //     event.preventDefault();
  //     var newBurger = {
  //       name: $("#bu").val().trim(),
  //       devoured: false,
  //     };
  //     // POST request.
  //     $.ajax("/api/burgers", {
  //       type: "POST",
  //       data: newBurger,
  //     }).then(function () {
  //       // Reload the page to get the updated list
  //       location.reload();
  //     });
  //   });
});
