module.exports = function(sequelize, DataTypes) {
    var Side = sequelize.define("Side", {
      chips: DataTypes.STRING,
      drinks: DataTypes.STRING
      });
    return Side;
  };
  
  