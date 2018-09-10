module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    bread: DataTypes.STRING,
    meat: DataTypes.STRING,
    veggies: DataTypes.STRING,
    condiments: DataTypes.STRING,
    chips: DataTypes.STRING,
    drinks: DataTypes.STRING,
    });
  return Order;
};


