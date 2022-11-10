'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Courses.init({
    title:{ 
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull : {
          args: true, 
          msg:'title debe estar presente'
        },
        notEmpty: {
          args: true, 
          msg:'title no debe ser vacio'
        },
        unique(value) {
    
          return Courses.findOne({where:{title:value}})
            .then((title) => {
              if (title) {
                throw new Error('Error hay mas de un nombre asi');
              }
            })
        },
      }
    },
    description:{ 
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: {
          args: true,
          msg: "Descripcion no debe ser vacia"
        }
      },
    },
    week:{ 
      type:DataTypes.INTEGER,
      validate:{
        notEmpty:{
          args:true,
          msg:'Weeks no debe ser vacio'
        },
       }
    },
    enroll_cost:{ 
      type:DataTypes.FLOAT,
      validate:{
        notEmpty:{
          args:true,
          msg:'enroll_cost no debe ser vacio'
        },
       }
    },
  }, {
    sequelize,
    modelName: 'Course',
    timestamps: false
  });
 
  return Courses;
};