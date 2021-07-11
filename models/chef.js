module.exports = function (sequelize, DataTypes) {
const chefs = sequelize.define("chefs",{
        id: {
          type: DataTypes.STRING,
          unique: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        awards: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        resturants: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        }
      });
    
      return chefs;
    };
    
