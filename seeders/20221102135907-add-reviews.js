'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('reviews', 
    [ {
        title: 'PHP Bootcamp',
        text: 'PHP a tu alcance',
        rating: 50,
        bootcamp_id: 1,
        user_id: 1
      },
      {
        title: 'JAVA Bootcamp',
        text: 'JAVA a tu alcance',
        rating: 40,
        user_id: 2
      },
      {
        title: 'HTML Bootcamp',
        text: 'HTML a tu alcance',
        rating: 50,
        bootcamp_id: 3,
        user_id: 3
      },
      {
        title: 'JS Bootcamp',
        text: 'JS a tu alcance',
        rating: 50,
        bootcamp_id: 2,
        user_id: 2
      }
      ], 
    {});
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('reviews', null, {});
     
  }
};
