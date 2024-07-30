const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
    console.error('Falta la variable de entorno MONGO_URI');
    process.exit(1);
}

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 10000,
}).then(() => {
    console.log('Conectado a MongoDB Atlas');
}).catch((error) => {
    console.error('Error al conectar a MongoDB Atlas', error);
});

mongoose.connection.on('error', (err) => {
    console.error('Error en la conexión a MongoDB:', err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Desconectado de MongoDB');
});

module.exports = mongoose;
