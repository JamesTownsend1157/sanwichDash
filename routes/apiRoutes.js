var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/sandwiches", function(req, res) {
    db.Sandwich.findAll({}).then(function(dbSandwich) {
      res.json(dbSandwich);
    });
  });

  // Create a new example
  app.post("/api/sandwiches", function(req, res) {
    db.Sandwich.create(req.body).then(function(dbSandwich) {
      res.json(dbSandwich);
    });
  });

  app.get("/api/sides", function(req, res) {
    db.Side.findAll({}).then(function(dbSide) {
      res.json(dbSide);
    });
  });

  // Create a new example
  app.post("/api/sides", function(req, res) {
    db.Side.create(req.body).then(function(dbSide) {
      res.json(dbSide);
    });
  });

  
  app.get("/api/drinks", function(req, res) {
    db.Drink.findAll({}).then(function(dbDrink) {
      res.json(dbDrink);
    });
  });

  // Create a new example
  app.post("/api/drinks", function(req, res) {
    db.Drink.create(req.body).then(function(dbDrink) {
      res.json(dbDrink);
    });
  });




  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
