'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        name: 'Test User One',
        email: 'test1@example.com',
        phone: '555-111-2222',
        message: 'Amazing service! Would definitely recommend.',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test User Two',
        email: 'test2@example.com',
        phone: null,
        message: 'Everything went smoothly and on time.',
        rating: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test User Three',
        email: 'test3@example.com',
        phone: '555-333-4444',
        message: 'Some delays but overall okay.',
        rating: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Test User Four',
        email: 'test4@example.com',
        phone: '',
        message: 'The team was very professional.',
        rating: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
