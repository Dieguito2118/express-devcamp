'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //Crear la Columna 'user_id' FK con users
    //addColumn recibe los siguientes Parametros
    //  1. La Tabla en la cual pone la Columna
    //  2. El Nombre de la nueva Columna
    //  3. Opciondes de la nueva Columna
    await queryInterface.addColumn('bootcamps',
                                    'user_id',
                                    { 
                                      type: Sequelize.INTEGER,
                                      references: 
                                      {
                                        model: 'users',
                                        key: 'id'
                                      },
                                      onUpdate: 'CASCADE',
                                      onDelete: 'SET NULL'
                                    }
                                    )    
  },

  async down (queryInterface, Sequelize) {
    //Metodo remove Column
    //A continuación los siguientes Parameetros
    await queryInterface.removeColumn('bootcamps' , 'user_id')
  }
};
