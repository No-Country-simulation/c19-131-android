const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

/**
 * @openapi
 * /api/cart/user/{userId}:
 *   get:
 *     summary: Obtiene el carrito del usuario
 *     description: Obtiene el carrito de compras asociado a un usuario específico.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b2d
 *     responses:
 *       200:
 *         description: Carrito obtenido exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.get('/user/:userId', cartController.getCartByUserId);

/**
 * @openapi
 * /api/cart/add:
 *   post:
 *     summary: Añade un producto al carrito
 *     description: Añade un producto al carrito de compras.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *                 example: 60d5f9c3f8c8a7b8c56a1b2d
 *               productId:
 *                 type: string
 *                 example: 60d5f9c3f8c8a7b8c56a1b3e
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Producto añadido exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/add', cartController.addToCart);

/**
 * @openapi
 * /api/cart/update/{cartItemId}:
 *   put:
 *     summary: Actualiza un producto en el carrito
 *     description: Actualiza la cantidad de un producto específico en el carrito de compras.
 *     parameters:
 *       - in: path
 *         name: cartItemId
 *         required: true
 *         description: ID del ítem del carrito
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b4e
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.put('/update/:cartItemId', cartController.updateCartItem);

/**
 * @openapi
 * /api/cart/remove/{cartItemId}:
 *   delete:
 *     summary: Elimina un producto del carrito
 *     description: Elimina un producto específico del carrito de compras.
 *     parameters:
 *       - in: path
 *         name: cartItemId
 *         required: true
 *         description: ID del ítem del carrito
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b5e
 *     responses:
 *       200:
 *         description: Producto eliminado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
router.delete('/remove/:cartItemId', cartController.removeFromCart);

/**
 * @openapi
 * /api/cart/empty/{userId}:
 *   delete:
 *     summary: Vacía el carrito del usuario
 *     description: Elimina todos los productos del carrito de compras de un usuario específico.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: ID del usuario
 *         schema:
 *           type: string
 *           example: 60d5f9c3f8c8a7b8c56a1b6e
 *     responses:
 *       200:
 *         description: Carrito vaciado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */
router.delete('/empty/:userId', cartController.emptyCart);

module.exports = router;
