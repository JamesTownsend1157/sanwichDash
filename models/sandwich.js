module.exports = function(sequelize, DataTypes) {
    var Sandwich = sequelize.define("Sandwich", {
      bread: DataTypes.STRING,
      meat: DataTypes.STRING,
      veggies: DataTypes.STRING,
      condiments: DataTypes.STRING,
    });
    return Sandwich;
  };