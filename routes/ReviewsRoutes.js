const express = require('express')
const {
    getAllReview,
    getSingleReview,
    updateReview,
    deleteReview,
    createReview
} = require('../controllers/ReviewsController')

//Definir Objeto de Ruteo
const router = express.Router()

//Crear rutas sin parametro
router.route('/')
            .get(getAllReview)
            .post(createReview)

//Crear rutas con parametro
router.route('/:id')
            .get(getSingleReview)
            .put(updateReview)
            .delete(deleteReview)

module.exports = router