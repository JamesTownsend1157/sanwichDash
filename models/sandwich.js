module.exports = function(sequelize, DataTypes) {
    var Sandwich = sequelize.define("Sandwich", {
      name: DataTypes.STRING,
      bread: DataTypes.STRING,
      meat: DataTypes.STRING,
      veggies: DataTypes.STRING,
      condiments: DataTypes.STRING,
    });
    return Sandwich;
  };