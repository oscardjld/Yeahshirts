import { createContext, useState, useEffect } from 'react';


export const CartContext = createContext();


export function CartProvider({ children }) {
    // Estado inicial 
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Guardar cada vez que cambie el carrito
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Agregar producto al carrito
    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    // Eliminar producto por ID
    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
        {children}
        </CartContext.Provider>
    );
}