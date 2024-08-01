const express = require('express');
const passport = require('passport');
const paymentController = require('../controllers/paymentController.js');
const router = express.Router();

/**
 * @openapi
 * /payment:
 *   post:
 *     summary: Procesa un pago
 *     description: Procesa el pago para el carrito del usuario autenticado.
 *     security:
 *       - jwt: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               paymentMethod:
 *                 type: string
 *                 example: credit_card
 *               totalAmount:
 *                 type: number
 *                 example: 99.99
 *     responses:
 *       200:
 *         description: Pago procesado exitosamaente
 *       400:
 *         description: Error en el procesamiento del pago
 */
router.post('/', passport.authenticate('jwt', { session: false }), paymentController.processPayment);

module.exports = router;
