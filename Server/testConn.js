const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGO_URI;

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexión exitosa');
    mongoose.disconnect();
}).catch((error) => {
    console.error('Error de conexión', error);
});
