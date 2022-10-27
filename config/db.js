const sequelize = require('./seq')
const colors = require('colors')
 
const connectDB = async ()=> {
   try {
   //Conectarse a la bd
   await sequelize.authenticate()
   console.log('CONECTADO A MYSQL'.bgBlack.green)
   } catch (error) {
      console.log(error)
   }
}

module.exports = connectDB