'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
     username: 'Juanito',
     email: 'jdcamargo386@misena.edu.co',
     password: '123456'
     },
     {
      username: 'Yeyito',
      email: 'yeyito123@misena.edu.co',
      password: '12345'
     },
     {
      username: 'Diego',
     email: 'dieguito@misena.edu.co',
     password: '1234'
     }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
