//1. Crear  el Objeto Express
const express = require('express')
//2. Citar las Dependencias necesarias para el Proyecto
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/db')
const listEndPoint = require('express-list-endpoints')
const { request } = require('express')
//Los componenetes de ruta
const bootcampRoutes = require('./routes/BootcampRoutes')
//Los componentes de ruta
const coursesRoutes = require('./routes/CourseRoutes')
//Los componentes de ruta
const userRoutes = require('./routes/UserRoutes')
//Los componentes de ruta
const reviewsRoutes = require('./routes/ReviewsRoutes')

//3.Establecer archivo de configuracion
dotenv.config({
    path:'./config/config.env'
})
console.log(process.env.PORT)

//Crear el Objeto Aplicación
//para el Servidor de Desarrollo
const app = express()
//Validemos el Objeto de Aplicacion
//Para recibir datos en formato JSON
app.use(express.json())

//Conexion a BD
connectDB()

//Rutas del Proyecto
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , coursesRoutes)
app.use('/api/v1/users' , userRoutes)
app.use('/api/v1/reviews' , reviewsRoutes)



//Endpoints de Dominio
//Bootcamps
//Imprimir la lista de Endpoints
//Validas del Proyecto
console.log(listEndPoint(app))

//Ejecutar el Servidor de Desarrollo
// Parametros:
//Puerto de Escucha
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor activo en Puerto 5000`.bgBlue.grey)
})