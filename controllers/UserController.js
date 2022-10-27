//Dependencias
//El Objeto de Conexion
const sequelize = require('../config/seq')
//DataTypes de Sequelize
const { DataTypes } = require('sequelize')
//El Modelo
const UserModel = require('../models/user')
//Crear la Entidad:
const User = UserModel(sequelize, DataTypes)

//Listar todos los Users
exports.getAllUsers = async (req , res)=>{
    //Traer los User
    const users = await User.findAll();
    res
        .status(200)
        .json({
            "success" : true,
            "data": users
        })
}

//Listar Users por Id
exports.getSingleUser = async (req , res)=>{
    //console.log(req.params.id)
    const singleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success" : true,
            "data": singleUser
        })
}

//Actualizar Users
exports.updateUser = async (req , res)=>{
    // Change everyone without a last name to "Doe"
    await User.update( req.body, {
        where: {
          id: req.params.id
        }
      });
      const singleUser = await User.findByPk(req.params.id);
      
      //console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data": singleUser
        })
}

//Borrar Users
exports.deleteUser = async (req , res)=>{
    const singleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
    res
        .status(200)
        .json({
            "success" : true,
            "data": singleUser
        })
}

//Crear nuevo Users
exports.createUser = async (req , res)=>{
    
    const newUser = await User.create(req.body);
    res
        .status(200)
        .json({
            "success" : true,
            "data": newUser
        })
}