require('dotenv').config(); // Cargar variables de entorno al principio

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('./config/database');
const passport = require('passport'); // Asegúrate de que passport esté importado
const passportConfig = require('./config/passport-config');

const swaggerDocs = require('./config/swagger'); // Importa la configuración de Swagger
// Routes
const authRoutes = require('./app/routes/authRoutes');

console.log('MONGO_URI:', process.env.MONGO_URI); // Verificar el valor de MONGO_URI


// Importar y configurar Passport
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize()); // Inicializa Passport

// Configura Swagger
swaggerDocs(app);


app.use('/api/auth', authRoutes);

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
