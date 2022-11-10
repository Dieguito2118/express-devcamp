//Dependencias
//El Objeto de Conexion
const sequelize = require('../config/seq')
//DataTypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El Modelo
const CoursesModel = require('../models/courses')
//Crear la Entidad:
const Course = CoursesModel(sequelize, DataTypes)

//listar todos los Courses
exports.getAllCourse = async (req, resp) => {
    try {
      //tarer los usuarios
      const Courses = await Course.findAll();
      resp
        .status(200)
        .json({
          "succes": true,
          "data": Courses
        })
    } catch (error) {
      resp
        .status(200)
        .json({
          "succes": true,
          "errors": "error de servidor desconocido"
        })
    }
  }

  //Listar Users por Id
exports.getSingleCourse = async (req , res)=>{
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if (singleCourse) {
            res
            .status(200)
            .json({
                "success": true,
                "data": singleCourse
            })
        } else {
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Course no existente"
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

//Actualizar Courses
exports.updateCourse = async (req , res)=>{
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if(!singleCourse){
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Course no existente"
        })
    } else{
        await Course.update( req.body, {
            where: {
            id: req.params.id
            }
        });

        //Seleccione Course actualizado
        const updateCourse = await Course.findByPk(req.params.id)
        res
            .status(200)
            .json({
                "success" : true,
                "data": updateCourse
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

//Borrar Courses
exports.deleteCourse = async(req , res)=>{
    try {
        const singleCourse = await Course.findByPk(req.params.id);
        if (!singleCourse) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Course no existente"
                })
        } else {
            await Course.destroy({
                where: {
                id: req.params.id
                }
            });
            res
                .status(200)
                .json({
                    "success": true,
                    "data": singleCourse
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
//Crear nuevo Course
exports.createCourse = async (req , res)=>{
    try {
        const newCourse = await Course.create(req.body);
        res
            .status(200)
            .json({
            "success" : true,
            "data": newCourse
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
                    "error": errores
                })            
        }   else{
            res    
                .status(401)
                .json({
                "success": false,
                "errors": "error de servidor"
            })
        }     
    }
}