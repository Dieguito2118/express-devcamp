'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,

      validate: {
        unique(value){
          return User.findOne({where:{username:value}})
          .then((username) => {
            if (username) {
              throw new Error('Este nombre de Usuario ya existe');
            }
          })
        },
        isAlpha: {
          args: true,
          msg: 'username debe tener solo letras'
        },
        notNull: {
          args: true,
          msg: 'username debe estar presente'
        },
        notEmpty: {
          args: true,
          msg: 'username no debe ser vacio'
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        unique(value){
          return User.findOne({where:{username:value}})
          .then((username) => {
            if (username) {
              throw new Error('email ya existe');
            }
          })
        },
      isEmail: {
        args: true,
        msg: 'email no valido'
      },
      notEmpty: {
        args: true,
        msg: 'email no debe ser vacio'
      },
      notNull: {
        args: true,
        msg: 'email debe estar presente'
      },
    },
  },
    password: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args:[5,10],
          msg: 'Password de minimo 5 y maximo 10 caracteres'
        },
      }
    }
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false
  });
  return User;
};