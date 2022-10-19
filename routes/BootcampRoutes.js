const express = require('express')

//Definir Objeto de Ruteo
const router = express.Router()

//Las Rutas de Bootcamps

//Crear nuevo Bootcamp
router.post('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data": "Aqui vamos a registrar Bootcamps"
        })
})

//Listar todos los Bootcamps
router.get('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data": "Aqui van a salir todos los Bootcamps"
        })
})

//Listar Bootcamp por Id
router.get('/:id' , (req , res)=>{
    res
        .status(200)
        .json({
            "success" : true,
            "data": `Aqui va a salir el Bootcamp cuyo Id es ${req.params.id}`
        })
})

//Actualizar Bootcamp
router.put('/:id' , (req , res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data": `Aqui va actualizarse el Bootcamp cuyo Id es ${req.params.id}`
        })
})

//Borrar Bootcamps
router.delete('/:id' , (req , res)=>{
    console.log(req.params.id)
    res
        .status(200)
        .json({
            "success" : true,
            "data": `Aqui va borrarse el Bootcamp cuyo Id es ${req.params.id}`
        })
})

module.exports = router