module.exports = function(sequelize, DataTypes) {
  var Side = sequelize.define("Side", {
    chips: DataTypes.STRING
    });
  return Side;
};

module.exports = function(sequelize, DataTypes) {
  var Sandwich = sequelize.define("Sandwich", {
    bread: DataTypes.STRING,
    meat: DataTypes.STRING,
    veggies: DataTypes.STRING,
    condiments: DataTypes.STRING,
  });
  return Sandwich;
};

module.exports = function(sequelize, DataTypes) {
  var Drink = sequelize.define("Drink", {
        drinks: DataTypes.STRING,
    });
  return Drink;
};