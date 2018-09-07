var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/orders", function(req, res) {
    db.Order.findAll({}).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  // Create a new example
  app.post("/api/orders", function(req, res) {
    db.Order.create(req.body).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
