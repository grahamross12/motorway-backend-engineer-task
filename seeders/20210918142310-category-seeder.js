'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Vehichles', [
      {
        make: 'tesla',
        model: 'model 3',
      },
      {
        make: 'seat',
        model: 'ibiza',
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Vehichles', null, {});
  }
};
