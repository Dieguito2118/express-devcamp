const mongoose = require('mongoose')

//const uri = 'mongodb+srv://Juan2104:1018410683cd@cluster0.kz6f05d.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/bootcamps-sena'
//Componente de Conexion a BD


const connectDB = async() => {
   const conn = await mongoose.connect(uri , { 
        useNewUrlParser : true,
        useUnifiedTopology : true
    })

   console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectDB()