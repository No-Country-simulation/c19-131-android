const Cart = require('../models/Cart');
const Product = require('../models/Product');

exports.getCartByUserId = async (req, res) => {
    const { userId } = req.params;
    try {
        const cart = await Cart.findOne({ userId }).populate('items.productId');
        if (!cart) {
            return res.status(404).json({ error: 'Carrito de compras no encontrado' });
        }
        res.status(200).json(cart);
    } catch (error) {
        console.error('Error al obtener el carrito de compras:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.addToCart = async (req, res) => {
    const { productId } = req.body;
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        // Lógica para agregar el producto al carrito
        // Esto depende de cómo quieras estructurar el carrito y la lógica de negocio

        res.status(200).json({ message: 'Producto agregado al carrito' });
    } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

exports.removeFromCart = async (req, res) => {
    const { cartItemId } = req.params;
    try {
        // Lógica para eliminar el producto del carrito
        // Esto depende de cómo hayas implementado el modelo de carrito

        res.status(200).json({ message: 'Producto eliminado del carrito' });
    } catch (error) {
        console.error('Error al eliminar producto del carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
