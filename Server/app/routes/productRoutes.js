const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/**
 * @openapi
 * /api/product:
 *   get:
 *     summary: Obtiene todos los productos
 *     description: Obtiene una lista de todos los productos disponibles.
 *     responses:
 *       200:
 *         description: Productos obtenidos exitosamente
 *       404:
 *         description: No se encontraron productos
 */
router.get('/', productController.getAllProducts);

/**
 * @openapi
 * /api/product/category/{categoryName}:
 *   get:
 *     summary: Obtiene productos por categoría
 *     description: Obtiene una lista de productos filtrados por la categoría proporcionada.
 *     parameters:
 *       - in: path
 *         name: categoryName
 *         required: true
 *         description: Nombre de la categoría
 *         schema:
 *           type: string
 *           example: Electrónica
 *     responses:
 *       200:
 *         description: Productos obtenidos exitosamente
 *       404:
 *         description: No se encontraron productos para la categoría
 */
router.get('/category/:categoryName', productController.getProductsByCategory);

/**
 * @openapi
 * /api/product/{productId}:
 *   get:
 *     summary: Obtiene un producto por ID
 *     description: Obtiene la información de un producto específico por su ID.
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b0e
 *     responses:
 *       200:
 *         description: Producto obtenido exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.get('/:productId', productController.getProductById);

module.exports = router;
