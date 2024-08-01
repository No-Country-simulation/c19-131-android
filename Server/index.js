const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('./config/database');
const passport = require('./config/passport-config'); // Asegúrate de que esta ruta es correcta
const swaggerDocs = require('./config/swagger');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
console.log('Passport initialized'); // Mensaje de depuración

// Configura Swagger
swaggerDocs(app);
console.log('Swagger docs configured'); // Mensaje de depuración

// Rutas
const authRoutes = require('./app/routes/authRoutes');
const cartRoutes = require('./app/routes/cartRoutes');
const categoryRoutes = require('./app/routes/categoryRoutes');
const productRoutes = require('./app/routes/productRoutes');

// Montar rutas en la aplicación
app.use('/api/auth', authRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
console.log('Routes mounted'); // Mensaje de depuración

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
