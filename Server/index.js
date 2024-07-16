require('dotenv').config(); // Cargar variables de entorno al principio
console.log('MONGO_URI:', process.env.MONGO_URI); // Agrega esta línea para verificar el valor

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('./config/database');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const authRoutes = require('./app/routes/authRoutes');
app.use('/api/auth', authRoutes);

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
