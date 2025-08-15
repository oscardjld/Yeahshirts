// src/pages/Cart.jsx
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { cartItems, removeFromCart } = useContext(CartContext);

    // para calcular el total del carrito
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="container py-5">
        <h2 className="text-light mb-4">Tu carrito</h2>

        {cartItems.length === 0 ? (
            <p className="text-secondary">No hay productos en el carrito.</p>
        ) : (
            <div className="row g-4">
            {cartItems.map((item, index) => (
                <div className="col-md-4" key={index}>
                <div className="card bg-dark text-light h-100">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                    <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">${item.price}</p>
                    <button
                        className="btn btn-outline-danger mt-auto"
                        onClick={() => removeFromCart(item.id)}
                    >
                        Eliminar
                    </button>
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}

        {/* Total */}
        {cartItems.length > 0 && (
            <div className="mt-5 text-end">
            <h4 className="text-light">Total: ${total.toFixed(2)}</h4>
            </div>
        )}
        </div>
    );
}

export default Cart;