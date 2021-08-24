'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('chefs', 'name', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('chefs', 'awards', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('chefs', 'restaurants', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('chefs', 'city', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('chefs', 'name', { transaction: t }),
        queryInterface.removeColumn('chefs', 'awards', { transaction: t }),
        queryInterface.removeColumn('chefs', 'restaurants', { transaction: t }),
        queryInterface.removeColumn('chefs', 'city', { transaction: t })
      ]);
    });
  }
};
