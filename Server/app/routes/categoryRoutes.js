const express = require('express');
const passport = require('passport');
const categoryController = require('../controllers/categoryController');
const router = express.Router();

/**
 * @openapi
 * /api/category:
 *   post:
 *     summary: Crea una categoría
 *     description: Crea una nueva categoría de producto.
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Electrónica
 *               description:
 *                 type: string
 *                 example: Categoría para productos electrónicos.
 *     responses:
 *       201:
 *         description: Categoría creada exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', passport.authenticate('jwt', { session: false }), categoryController.createCategory);

/**
 * @openapi
 * /api/category:
 *   get:
 *     summary: Obtiene todas las categorías
 *     description: Obtiene una lista de todas las categorías de producto.
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Categorías obtenidas exitosamente
 *       404:
 *         description: No se encontraron categorías
 */
router.get('/', passport.authenticate('jwt', { session: false }), categoryController.getCategories);

/**
 * @openapi
 * /api/category/{id}:
 *   get:
 *     summary: Obtiene una categoría por ID
 *     description: Obtiene la categoría de producto asociada al ID proporcionado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b7e
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Categoría obtenida exitosamente
 *       404:
 *         description: Categoría no encontrada
 */
router.get('/:id', passport.authenticate('jwt', { session: false }), categoryController.getCategoryById);

/**
 * @openapi
 * /api/category/{id}:
 *   put:
 *     summary: Actualiza una categoría
 *     description: Actualiza la información de una categoría de producto existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b8e
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Electrodomésticos
 *               description:
 *                 type: string
 *                 example: Categoría actualizada para productos electrodomésticos.
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Categoría actualizada exitosamente
 *       404:
 *         description: Categoría no encontrada
 */
router.put('/:id', passport.authenticate('jwt', { session: false }), categoryController.updateCategory);

/**
 * @openapi
 * /api/category/{id}:
 *   delete:
 *     summary: Elimina una categoría
 *     description: Elimina una categoría de producto existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de la categoría
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b9e
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Categoría eliminada exitosamente
 *       404:
 *         description: Categoría no encontrada
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }), categoryController.deleteCategory);

module.exports = router;
