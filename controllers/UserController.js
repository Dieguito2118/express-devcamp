//Dependencias
//El Objeto de Conexion
const sequelize = require('../config/seq')
//DataTypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El Modelo
const UserModel = require('../models/user')
//Crear la Entidad:
const User = UserModel(sequelize, DataTypes)

//listar todos los users
exports.getAllUsers = async (req, res)=>{
    try {
        //Traer los Usuarios
       const users = await User.findAll();
       res
           .status(200)
           .json({
               "success": true,
               "data": users
           })
   } catch (error) {
       res
           .status(400)
           .json({
               "success": false,
               "errors": "Error de servidor desconocido"
           })
   }
  
}

//Listar Users por Id
exports.getSingleUser = async (req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (singleUser) {
            res
            .status(200)
            .json({
                "success": true,
                "data": singleUser
            })
        } else {
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Usuario no existente"
            })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
}

//Actualizar Users
exports.updateUser = async (req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if(!singleUser){
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
    } else{
        await User.update( req.body, {
            where: {
            id: req.params.id
            }
        });
        //Seleccione User actualizado
        const updateUser = await User.findByPk(req.params.id)
        res
            .status(200)
            .json({
                "success" : true,
                "data": updateUser
            }) 
    }
        
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
    
}

//Borrar users
exports.deleteUser = async(req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (!singleUser) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
                })
        } else {
            await User.destroy({
                where: {
                id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleUser
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
    
}
//Crear nuevo Users
exports.createUser = async (req , res)=>{
    try {
        const newUser = await User.create(req.body);
        res
            .status(200)
            .json({
            "success" : true,
            "data": newUser
        })        
    } catch (error) {
        if(error instanceof ValidationError){
            //Recorrer el Arreglo de errores
            //Map
            const errores = error.errors.map((elemento) =>{return elemento.message})
            res    
                .status(400)
                .json({
                    "success": false,
                    "error": error
                })
                
        }   else{
            res    
                .status(400)
                .json({
                "success": false,
                "errors": "error de servidor"
            })
        }     
    }
}