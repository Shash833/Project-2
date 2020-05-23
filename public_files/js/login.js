$(function () {
  $("#submitForm").on("click", function (event) {
    event.preventDefault();

  });
  //when user submits registration details.
  $("#registerSubmit").on("click", function (event) {
    event.preventDefault();
    var newUser = {
      username: $("#createUsername").val().trim(),
      password: $("#createPassword").val().trim(),
      firstname: $("#createFirstName").val().trim(),
      lastname: $("#createLastName").val().trim(),
    };
    // POST request.
    $.ajax("/api/register", {
      type: "POST",
      data: newUser,
    }).then(function () {
      location.assign("/");
    });
  });
  //when user logs in
  $("#submitLogin").on("click", function (event) {
    event.preventDefault();
    var User = {
      username: $("#loginUsername").val().trim(),
      password: $("#loginPassword").val().trim(),
    };
    // POST request.
    $.ajax("/api/login", {
      type: "POST",
      data: User,
    })
      .then(function () {
        location.assign("/search");
      });
  });

  //when user logs out
  $("#logoutButton").on("click", function (event) {
    // DELETE request.
    $.ajax("/logout", {
      type: "DELETE",
    })
      .then(function () {
        location.assign("/");
      });
  });

});
