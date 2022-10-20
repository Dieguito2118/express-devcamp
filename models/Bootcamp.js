const mongoose = require('mongoose')

//Modelo de Bootcamps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [
            true,
            "Por favor, ingresa el nombre"
        ],
        unique: true,
        maxlength: [
            30,
            "No se admiten Bootcamps mayores a > 30"
        ]
    },
    description: {
        type: String,
        required : [
            true,
            'Por favor, ingrese Descripcion'
        ],
        maxlength: [
            500,
            'No se admiten Descripciones > 500'
        ]
    },
    phone:{
        type: String,
        maxlength: [
            20,
            'Telefonos no mayores a 10'
        ]
    },
    email:{
        type:String,
        match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Por favor, ingrese Email Valido'
        ]
    },
    averageCost: Number,
    averageRating: {
        type: Number,
        min:[1, 'Calificacion Minima: 1'],
        max:[10, 'Calificacion Maxima: 10']
    }
})

module.exports = mongoose.model('bootcamp' , BootcampsSchema)