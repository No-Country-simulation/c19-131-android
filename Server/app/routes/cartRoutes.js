const express = require('express');
const passport = require('passport');
const cartController = require('../controllers/cartController'); // Asegúrate de que esta ruta sea correcta
const router = express.Router();

/**
 * @openapi
 * /cart:
 *   post:
 *     summary: Agrega un producto al carrito
 *     description: Agrega un producto al carrito del usuario autenticado.
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: string
 *                 example: 60d5f9c3f8c8a7b8c56a1b7e
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Producto agregado al carrito exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/', passport.authenticate('jwt', { session: false }), cartController.addToCart);

/**
 * @openapi
 * /cart:
 *   get:
 *     summary: Obtiene el carrito del usuario
 *     description: Obtiene el carrito del usuario autenticado.
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Carrito obtenido exitosamente
 *       404:
 *         description: Carrito no encontrado
 */
router.get('/', passport.authenticate('jwt', { session: false }), cartController.getCart);

/**
 * @openapi
 * /cart/{id}:
 *   delete:
 *     summary: Elimina un producto del carrito
 *     description: Elimina un producto del carrito del usuario autenticado.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del producto
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b7e
 *     security:
 *       - jwt: []
 *     responses:
 *       200:
 *         description: Producto eliminado del carrito exitosamente
 *       404:
 *         description: Producto no encontrado en el carrito
 */
router.delete('/:id', passport.authenticate('jwt', { session: false }), cartController.removeFromCart);

module.exports = router;
