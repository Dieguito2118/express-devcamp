const sequelize = require('./seq')
const colors = require('colors')
const { DataTypes } = require('sequelize')

//Crear una instancia del Modelo Users
const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes) 

//Definir la Funcion de conexion a la base de datos

const connectDB = async ()=> {
   try {
   //Conectarse a la bd
   await sequelize.authenticate()
   console.log('CONECTADO A MYSQL'.bgBlack.blue)
   const jane = await User.create({ 
      username: "Sebas",
      email: "sebas@mise.edu.co",
      password:"123456"
   });
   console.log("Jane's auto-generated ID:", jane.id);
   } catch (error) {
      console.log(error)
   }
}

connectDB()    