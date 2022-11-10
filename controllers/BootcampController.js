//Dependencias
//El Objeto de Conexion
const sequelize = require('../config/seq')
//DataTypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El Modelo
const UserModel = require('../models/bootcamps')
//Crear la Entidad:
const Bootcamps = BootcampModel(sequelize, DataTypes)

//listar todos los Bootcamps
exports.getAllBootcamps = async (req, res)=>{
    try {
        //Traer los Bootcamps
       const bootcamps = await Bootcamps.findAll();
       res
           .status(200)
           .json({
               "success": true,
               "data": Bootcamps
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

//Listar Bootcamps por Id
exports.getSingleBootcamp = async (req , res)=>{
    try {
        const singleBootcamp = await Bootcamps.findByPk(req.params.id);
        if (singleBootcamp) {
            res
            .status(200)
            .json({
                "success": true,
                "data": singleBootcamp
            })
        } else {
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Bootcamp no existente"
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
exports.updateBootcamp = async (req , res)=>{
    try {
        const singleBootcamp = await Bootcamps.findByPk(req.params.id);
        if(!singleBootcamp){
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Usuario no existente"
        })
    } else{
        await Bootcamps.update( req.body, {
            where: {
            id: req.params.id
            }
        });

    //Seleccione Bootcamp actualizado
        const updateBootcamp = await Bootcamps.findByPk(req.params.id)
        res
            .status(200)
            .json({
                "success" : true,
                "data": updateBootcamp
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
exports.deleteBootcamp = async(req , res)=>{
    try {
        const singleBootcamp = await Bootcamps.findByPk(req.params.id);
        if (!singleBootcamp) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Bootcamps no existente"
                })
        } else {
            await Bootcamps.destroy({
                where: {
                id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleBootcamp
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
exports.createBootcamps = async (req , res)=>{
    try {
        const newBootcamps = await Bootcamps.create(req.body);
        res
            .status(200)
            .json({
            "success" : true,
            "data": newBootcamps
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