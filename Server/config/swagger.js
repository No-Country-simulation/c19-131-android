const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Opciones de configuración para Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentación de la API para mi aplicación',
        },
        servers: [
            {
                url: 'http://localhost:3000/api',
                description: 'Servidor de desarrollo',
            },
        ],
    },
    // Ruta a los archivos que contienen la documentación
    apis: ['./app/routes/*.js'], // Ajusta esta ruta según la ubicación de tus archivos de rutas
};

// Genera la especificación Swagger
const specs = swaggerJsdoc(options);

// Configura la ruta para Swagger UI
const swaggerDocs = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};

module.exports = swaggerDocs;
