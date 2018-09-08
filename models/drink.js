module.exports = function(sequelize, DataTypes) {
    var Drink = sequelize.define("Drink", {
          drinks: DataTypes.STRING,
      });
    return Drink;
  };