const express = require('express')
const { 
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
} = require('../controllers/UserController')

//Definir Objeto de Ruteo
const router = express.Router()

//Crear rutas sin parametro
router.route('/')
            .get(getAllUsers)
            .post(createUser)

//Crear rutas con parametro
router.route('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)

module.exports = router