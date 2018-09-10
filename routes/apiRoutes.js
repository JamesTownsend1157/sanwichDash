var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/orders", function(req, res) {
    db.Sandwich.findAll({}).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  // Create a new example
  app.post("/api/orders", function(req, res) {
    db.Sandwich.create(req.body).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  // app.get("/api/sides", function(req, res) {
  //   db.Side.findAll({}).then(function(dbSide) {
  //     res.json(dbSide);
  //   });
  // });

  // // Create a new example
  // app.post("/api/sides", function(req, res) {
  //   db.Side.create(req.body).then(function(dbSide) {
  //     res.json(dbSide);
  //   });
  // });

  
  // app.get("/api/drinks", function(req, res) {
  //   db.Drink.findAll({}).then(function(dbDrink) {
  //     res.json(dbDrink);
  //   });
  // });

  // // Create a new example
  // app.post("/api/drinks", function(req, res) {
  //   db.Drink.create(req.body).then(function(dbDrink) {
  //     res.json(dbDrink);
  //   });
  // });




  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
