// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devoured-burger").on("click", function(event) {
   event.preventDefault();
    //console.log("Am I hitting the change status DEVOURED button?");
    var id = $(this).data("id");
    var newDevoured = {id: id};
    //$(this).data("newDevoured");
    //console.log("What is the id", id);
    

    // var newDevouredState = {
    //   devoured: newDevoured
    // };

    console.log("What is the value of newDevured", newDevoured);

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

      console.log("Am I hitting the submit button?");
      var newBurger = {name: $("#newBurger").val().trim(),
      //devoured: $("[name=devoured]:checked").val().trim()
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