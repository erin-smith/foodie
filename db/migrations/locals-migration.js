'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('locals', 'name', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        queryInterface.addColumn('locals', 'awards', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('locals', 'restaurants', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t }),
        queryInterface.addColumn('locals', 'city', {
          type: Sequelize.DataTypes.STRING,
        }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('locals', 'name', { transaction: t }),
        queryInterface.removeColumn('locals', 'awards', { transaction: t }),
        queryInterface.removeColumn('locals', 'restaurants', { transaction: t }),
        queryInterface.removeColumn('locals', 'city', { transaction: t })
      ]);
    });
  }
};
