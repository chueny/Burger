// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devoured-burger").on("click", function(event) {
   event.preventDefault();
   
    var id = $(this).data("id");
    var newDevoured = {id: id};

    // Send the PUT request.
    $.ajax("/api/burgers/devoured", {
      type: "PUT",
      data: newDevoured
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {name: $("#newBurger").val().trim(),
    };

     
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});