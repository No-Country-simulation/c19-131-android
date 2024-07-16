const mongoose = require('mongoose');
require('dotenv').config(); // Cargar variables de entorno

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error('Falta la variable de entorno MONGO_URI');
    process.exit(1); // Termina el proceso si falta la variable
}

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB Atlas');
}).catch((error) => {
    console.error('Error al conectar a MongoDB Atlas', error);
});

module.exports = mongoose;
