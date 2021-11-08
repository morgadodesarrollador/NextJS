
const mongoose = require('mongoose');
//leemos las variables de entorno de var.env
require('dotenv').config({ path: 'var.env'}); 
console.log (process.env.DB_MONGO);


const conectarDB = async() => {
    mongoose.connect(process.env.DB_MONGO,
        {
          useNewUrlParser: true,
       //   userUnifiedTopology: true,
        //  useFindAndModify: false,
        //  useCreateIndex: true
       //   user:'morgado',
       //   pass: '1234',
        })
        try {
          await mongoose.connect(process.env.DB_MONGO, { 
              useNewUrlParser: true, useUnifiedTopology: true
          });
          console.log('DB Conectada');
      }catch(error){ 
          console.log (process.env.DB_MONGO);
          console.log (error);
         // process.exit(1); // fin app
      }
    
}

module.exports = conectarDB;