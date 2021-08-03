'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chefs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  chefs.init({
    name: DataTypes.STRING,
    awards: DataTypes.STRING,
    restaurants: DataTypes.STRING,
    city: DataTypes.STRING
  }, 
  { sequelize, modelName: 'chefs', timestamps: false },
    );
  return chefs;
};