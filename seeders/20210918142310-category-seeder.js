'use strict';

module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    // Add dummy data to the vehichles table
    await queryInterface.bulkInsert('Vehichles', [
      { make: 'Tesla',
        model: 'Model 3' },
      { make: 'Seat',
        model: 'Ibiza' },
      { make: 'Audi',
        model: 'A3' },
      { make: 'Toyota',
        model: 'Prius' },
      { make: 'Audi', 
        model: 'TT'}, 
      { make: 'BMW',
        model: 'X3'}
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    // Remove all data from the vehichles table
    await queryInterface.bulkDelete('Vehichles', null, {});
  }
};
