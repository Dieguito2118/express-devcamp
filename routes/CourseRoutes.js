const express = require('express')
const {
    getAllCourse,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    createCourse
} = require('../controllers/CoursesController')

//Definir Objeto de Ruteo
const router = express.Router()

//Crear rutas sin parametro
router.route('/')
            .get(getAllCourse)
            .post(createCourse)

//Crear rutas con parametro
router.route('/:id')
            .get(getSingleCourse)
            .put(updateCourse)
            .delete(deleteCourse)

module.exports = router