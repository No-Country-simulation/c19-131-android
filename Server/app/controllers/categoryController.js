const Category = require('../models/Category');
const Product = require('../models/Product'); // Asegúrate de importar el modelo de Producto

// Obtener todas las categorías
const getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener categorías', error });
    }
};

// Obtener productos por categoría
const getCategoryProducts = async (req, res) => {
    try {
        const { id } = req.params;

        // Verificar si la categoría existe
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

// Crear una nueva categoría
const createCategory = async (req, res) => {
    try {
        const { name, description } = req.body;

        if (!name || !description) {
            return res.status(400).json({ error: 'Faltan campos requeridos' });
        }

        const category = new Category({ name, description });
        await category.save();

        res.status(201).json(category);
    } catch (error) {
        console.error('Error creando categoría:', error);
        res.status(500).json({ error: 'Error al crear categoría' });
    }
};

// Obtener una categoría por ID
const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener categoría', error });
    }
};

// Actualizar una categoría
const updateCategory = async (req, res) => {
    try {
        const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedCategory) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar categoría', error });
    }
};

// Eliminar una categoría
const deleteCategory = async (req, res) => {
    try {
        const deletedCategory = await Category.findByIdAndDelete(req.params.id);
        if (!deletedCategory) return res.status(404).json({ message: 'Categoría no encontrada' });
        res.status(200).json({ message: 'Categoría eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar categoría', error });
    }
};

module.exports = {
    getCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory,
    getCategoryProducts
};
