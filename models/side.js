module.exports = function(sequelize, DataTypes) {
    var Side = sequelize.define("Side", {
      chips: DataTypes.STRING
      });
    return Side;
  };
  
  