const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Obtener el carrito de compras del usuario (si se requiere autenticación)
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

// Agregar un producto al carrito de compras
exports.addToCart = async (req, res) => {
    const { productId } = req.body;
    const { userId } = req.user; // Suponiendo que tienes el usuario autenticado en req.user
    try {
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        let cart = await Cart.findOne({ userId });

        // Si no existe un carrito para este usuario, crea uno nuevo
        if (!cart) {
            cart = new Cart({ userId });
        }

        // Revisa si el producto ya está en el carrito
        const cartItem = cart.items.find(item => item.productId.toString() === productId);
        if (cartItem) {
            // Si el producto ya existe, aumenta la cantidad
            cartItem.quantity++;
        } else {
            // Si el producto no existe en el carrito, añádelo
            cart.items.push({ productId, quantity: 1 });
        }

        // Calcular el precio total del carrito (puedes hacerlo según tu lógica de negocio)
        cart.totalPrice = cart.items.reduce((total, item) => {
            const productPrice = product.price * item.quantity;
            return total + productPrice;
        }, 0);

        // Guardar el carrito actualizado en la base de datos
        await cart.save();

        res.status(200).json({ message: 'Producto agregado al carrito', cart });
    } catch (error) {
        console.error('Error al agregar producto al carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Actualizar la cantidad de un producto en el carrito de compras
exports.updateCartItem = async (req, res) => {
    const { cartItemId } = req.params;
    const { quantity } = req.body;
    const { userId } = req.user; // Suponiendo que tienes el usuario autenticado en req.user
    try {
        let cart = await Cart.findOne({ userId });

        // Verificar si el producto está en el carrito
        const cartItem = cart.items.find(item => item._id.toString() === cartItemId);
        if (!cartItem) {
            return res.status(404).json({ error: 'Producto no encontrado en el carrito' });
        }

        // Actualizar la cantidad del producto
        cartItem.quantity = quantity;

        // Recalcular el precio total del carrito (puedes hacerlo según tu lógica de negocio)
        cart.totalPrice = cart.items.reduce((total, item) => {
            const productPrice = item.productId.price * item.quantity;
            return total + productPrice;
        }, 0);

        // Guardar el carrito actualizado en la base de datos
        await cart.save();

        res.status(200).json({ message: 'Cantidad de producto actualizada', cart });
    } catch (error) {
        console.error('Error al actualizar producto en el carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Eliminar un producto del carrito de compras
exports.removeFromCart = async (req, res) => {
    const { cartItemId } = req.params;
    const { userId } = req.user; // Suponiendo que tienes el usuario autenticado en req.user
    try {
        let cart = await Cart.findOne({ userId });

        // Filtrar el producto a eliminar del carrito
        cart.items = cart.items.filter(item => item._id.toString() !== cartItemId);

        // Recalcular el precio total del carrito (puedes hacerlo según tu lógica de negocio)
        cart.totalPrice = cart.items.reduce((total, item) => {
            const productPrice = item.productId.price * item.quantity;
            return total + productPrice;
        }, 0);

        // Guardar el carrito actualizado en la base de datos
        await cart.save();

        res.status(200).json({ message: 'Producto eliminado del carrito', cart });
    } catch (error) {
        console.error('Error al eliminar producto del carrito:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Vaciar todo el carrito de compras
exports.emptyCart = async (req, res) => {
    const { userId } = req.params;
    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ error: 'Carrito de compras no encontrado' });
        }

        // Vaciar el array de items del carrito
        cart.items = [];
        cart.totalPrice = 0;

        // Guardar el carrito vacío en la base de datos
        await cart.save();

        res.status(200).json({ message: 'Carrito de compras vaciado', cart });
    } catch (error) {
        console.error('Error al vaciar el carrito de compras:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};
