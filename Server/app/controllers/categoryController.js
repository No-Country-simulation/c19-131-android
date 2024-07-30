const Category = require('../models/Category');

exports.createCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = new Category({ name });
        await category.save();
        res.status(201).json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateCategory = async (req, res) => {
    const { name } = req.body;
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, { name }, { new: true });
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json(category);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }
        res.json({ message: 'Category deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
