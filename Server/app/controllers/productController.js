const Product = require('../models/Product');

exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error al obtener todos los productos:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.getProductsByCategory = async (req, res) => {
    const { categoryName } = req.params;
    try {
        const products = await Product.find({ category: categoryName });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error al obtener productos por categoría:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.getProductById = async (req, res) => {
    const { productId } = req.params;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error al obtener producto por ID:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
