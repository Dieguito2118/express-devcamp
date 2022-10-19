//1. Crear  el Objeto Express
const express = require('express')
//2. Citar las Dependencias necesarias para el Proyecto
const dotenv = require('dotenv')
const colors = require('colors')
const listEndPoint = require('express-list-endpoints')
const { request } = require('express')
//Los componenetes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
//Los componentes de ruta
const coursesRoutes = require('./rouest/CourseRoutes')

//3.Establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
console.log(process.env.PORT)

//Crear el Objeto Aplicación
//para el Servidor de Desarrollo
const app = express()

//Rutas del Proyecto
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , coursesRoutes)

//Endpoint de Aplicacion
app.get('/'  , (request , response )=>{
    response
        .status(200)
        .json({
            "sucess": true,
            "data" : "Request  Exitosa"
        })
})

//Endpoints de Dominio
//Bootcamps
//Imprimir la lista de Endpoints
//Validas del Proyecto
console.log(listEndPoint(app))

//Ejecutar el Servidor de Desarrollo
// Parametros:
//Puerto de Escucha
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor activo en Puerto 5000`.bgBlue.yellow)
})