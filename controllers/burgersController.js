var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log("this is this bubrger.all", hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  //console.log("We are hitting the post?");
  console.log(req.body);
 
  burger.create(["burger_name"], [req.body.name], function(result) {
   // console.log("What is burger.create:", result);
    res.status(200).end();
  }); 
});

router.put("/api/burgers/devoured", function(req, res) {
  
  burger.update([req.body.id], function(result) {
  res.status(200).end();
  });

});
// Export routes for server.js to use.
module.exports = router;
