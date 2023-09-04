'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Items', [{
        name: 'Fullstack',
        TodoId : 1,
        createdAt: new Date(),
        updatedAt : new Date()
      },
      {
        name: 'UI UX',
        TodoId : 2,
        createdAt: new Date(),
        updatedAt : new Date()
      }
    
    ], {});
   
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Items', null, {});
     
  }
};
