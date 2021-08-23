'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class locals extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  locals.init({
    name: DataTypes.STRING,
    awards: DataTypes.STRING,
    restaurants: DataTypes.STRING,
    city: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'locals',
    timestamps: false,
    createdAt: false,
    updatedAt: false
  });
  return locals;
};

