const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @openapi
 * /auth/register:
 *   post:
 *     summary: Registra un nuevo usuario
 *     description: Crea una nueva cuenta de usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       201:
 *         description: Usuario registrado exitosamente
 *       400:
 *         description: Error en la solicitud
 */
router.post('/register', authController.registerUser);

/**
 * @openapi
 * /auth/login:
 *   post:
 *     summary: Inicia sesión
 *     description: Inicia sesión con un email y una contraseña.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 example: password123
 *     responses:
 *       200:
 *         description: Inicio de sesión exitoso
 *       400:
 *         description: Error en la solicitud
 */
router.post('/login', authController.loginUser);

/**
 * @openapi
 * /auth/logout:
 *   post:
 *     summary: Cierra sesión
 *     description: Cierra la sesión del usuario actual.
 *     responses:
 *       200:
 *         description: Cierre de sesión exitoso
 *       400:
 *         description: Error en la solicitud
 */
router.post('/logout', authController.logoutUser);

module.exports = router;
