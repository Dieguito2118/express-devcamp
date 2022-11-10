//Dependencias
//El Objeto de Conexion
const sequelize = require('../config/seq')
//DataTypes de Sequelize
const { DataTypes, ValidationError } = require('sequelize')
//El Modelo
const ReviewsModel = require('../models/reviews')
//Crear la Entidad:
const Review = ReviewsModel(sequelize, DataTypes)

//listar todos los Courses
exports.getAllReview = async (req, resp) => {
    try {
      //tarer los usuarios
      const Reviews = await Review.findAll();
      resp
        .status(200)
        .json({
          "succes": true,
          "data": Reviews
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
exports.getSingleReview = async (req , res)=>{
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (singleReview) {
            res
            .status(200)
            .json({
                "success": true,
                "data": singleReview
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
exports.updateReview = async (req , res)=>{
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if(!singleReview){
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Review no existente"
        })
    } else{
        await Review.update( req.body, {
            where: {
            id: req.params.id
            }
        });

        //Seleccione Course actualizado
        const updateReview = await Review.findByPk(req.params.id)
        res
            .status(200)
            .json({
                "success" : true,
                "data": updateReview
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

//Borrar Review
exports.deleteReview = async(req , res)=>{
    try {
        const singleReview = await Review.findByPk(req.params.id);
        if (!singleReview) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Review no existente"
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
                    "data": singleReview
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
//Crear nuevo Review
exports.createReview = async (req , res)=>{
    try {
        const newReview = await Review.create(req.body);
        res
            .status(200)
            .json({
            "success" : true,
            "data": newReview
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