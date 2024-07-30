const Product = require('../models/Product');
const Category = require('../models/Category');

// Crear un nuevo producto
const createProduct = async (req, res) => {
    try {
        const { name, description, price, category, imageUrl, stock } = req.body;

        if (!name || !description || !price || !category || !imageUrl || !stock) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const categoryExists = await Category.findById(category);
        if (!categoryExists) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        const product = new Product({ name, description, price, category, imageUrl, stock });
        await product.save();

        res.status(201).json(product);
    } catch (error) {
        console.error('Error creando producto:', error);
        res.status(500).json({ error: 'Error al crear producto' });
    }
};

// Obtener todos los productos
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error obteniendo productos:', error);
        res.status(500).json({ error: 'Error al obtener productos' });
    }
};

// Obtener productos por categoría
const getProductsByCategory = async (req, res) => {
    try {
        const { categoryName } = req.params;
        
        // Busca la categoría por nombre
        const category = await Category.findOne({ name: categoryName });
        if (!category) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        // Busca productos asociados con la categoría
        const products = await Product.find({ category: category._id });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error obteniendo productos por categoría:', error);
        res.status(500).json({ error: 'Error al obtener productos por categoría' });
    }
};

// Obtener un producto por ID
const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.productId);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error('Error obteniendo producto por ID:', error);
        res.status(500).json({ message: 'Error al obtener producto', error });
    }
};

// Obtener productos de una categoría (opcional)
const getCategoryProducts = async (req, res) => {
    try {
        const { id } = req.params;

        // Verifica si la categoría existe
        const category = await Category.findById(id);
        if (!category) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        const products = await Product.find({ category: id });
        res.status(200).json(products);
    } catch (error) {
        console.error('Error obteniendo productos por categoría:', error);
        res.status(500).json({ error: 'Error al obtener productos por categoría' });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductsByCategory,
    getProductById,
    getCategoryProducts
};
