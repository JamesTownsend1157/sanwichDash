module.exports = function(sequelize, DataTypes) {
    var Total = sequelize.define("Total", {
      orderid: DataTypes.FLOAT,
      total: DataTypes.FLOAT},  {
        timestamps: false  
      });

      Total.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Total.belongsTo(models.Info, {
          foreignKey: 'orderid'}
        );
      };
    
      // Drink.associate = function(models) {
      //   // We're saying that a Post should belong to an Author
      //   // A Post can't be created without an Author due to the foreign key constraint
      //   Drink.belongsTo(models.Info, {
      //     foreignKey: {
      //       allowNull: false
      //     }
      //   });
      // };

    return Total;
  };