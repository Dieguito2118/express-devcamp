'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('courses', 
    [{
        title: 'Excel',
        description: 'Aprende mas sobre Excel',
        week: 4,
        enroll_cost: 5400,
        bootcamp_id: 1
      },
      {
        title: 'Python',
        description: 'Aprende mas sobre Python en este curso',
        week: 6,
        enroll_cost: 10000,
        bootcamp_id: 2
      },
      {
        title: 'Visual Studio Code',
        description: 'Aprende mas sobre Visual Studio Code',
        week: 10,
        enroll_cost: 9000,
        bootcamp_id: 3
      },
      {
        title: 'Power Point',
        description: 'Aprende mas sobre Power Point',
        week: 2,
        enroll_cost: 3000,
        bootcamp_id: 2
      }
    
    
    ], {});
  },

  async down (queryInterface, Sequelize) {
    
     await queryInterface.bulkDelete('courses', null, {});

  }
};
