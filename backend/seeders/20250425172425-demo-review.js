'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        phone: '555-123-4567',
        message: 'Great service! Highly recommend.',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Bob Smith',
        email: 'bob@example.com',
        phone: null,
        message: 'Fast and reliable. Will use again.',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Carmen Reyes',
        email: 'carmen@example.com',
        phone: '555-987-6543',
        message: 'Very professional and careful.',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daniel Kim',
        email: 'daniel.kim@example.com',
        phone: null,
        message: 'Okay experience. A few delays.',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};