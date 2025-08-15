import { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const openCart = () => setIsCartOpen(true);
    const closeCart = () => setIsCartOpen(false);

    // Agregar producto con control de cantidad
    const addToCart = (product) => {
        const exists = cartItems.find((item) => item.id === product.id);

        if (exists) {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
            item.id === product.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            )
        );
        } else {
        toast.success(`${product.name} agregado al carrito`);
        setCartItems((prevItems) => [...prevItems, { ...product, cantidad: 1 }]);
        }

    openCart(); // para abrir el carrito
    };

    // Eliminar solo una unidad
    const removeFromCart = (id) => {
        setCartItems((prevItems) => {
        const item = prevItems.find((p) => p.id === id);

        if (item && item.cantidad > 1) {
            return prevItems.map((p) =>
            p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
            );
        } else {
            return prevItems.filter((p) => p.id !== id);
        }
        });
    };

    return (
        <CartContext.Provider
        value={{
            cartItems,
            addToCart,
            removeFromCart,
            isCartOpen,
            openCart,
            closeCart,
        }}
        >
        {children}
        </CartContext.Provider>
    );
}