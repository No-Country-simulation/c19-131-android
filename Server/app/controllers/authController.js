const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        let existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya está registrado' });
        }

        const newUser = new User({
            email,
            password
        });

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);

        await newUser.save();

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al registrar usuario' });
    }
};

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const payload = {
            userId: user._id,
            email: user.email
        };

        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Inicio de sesión exitoso', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
};

exports.logoutUser = (req, res) => {
    // Suponiendo que el token está en el encabezado Authorization
    const token = req.headers['authorization']?.split(' ')[1]; // Extraer token del encabezado Authorization

    if (token) {
        // Aquí podrías añadir lógica para manejar tokens revocados si estás usando esa técnica
        res.status(200).json({ message: 'Logout exitoso' });
    } else {
        res.status(400).json({ message: 'No se proporcionó token' });
    }
};
