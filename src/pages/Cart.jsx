import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import CartFooter from '../components/CartFooter';

function Cart() {
    const { cartItems, removeFromCart, isCartOpen, closeCart } = useContext(CartContext);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.cantidad, 0);

    if (!isCartOpen) return null;

    return (
        <div className="cart-overlay">
        <div className="cart-panel bg-dark text-light d-flex flex-column">
            {/* Header */}
            <div className="cart-header p-4 border-bottom border-secondary">
            <div className="d-flex justify-content-between align-items-center">
                <h2 className="mb-0">Tu carrito</h2>
                <button className="btn btn-outline-light" onClick={closeCart}>✕</button>
            </div>
            </div>

            {/* Para el scroll */}
            <div className="cart-scrollable flex-grow-1 overflow-auto p-4">
            {cartItems.length === 0 ? (
                <p className="text-secondary">No hay productos en el carrito.</p>
            ) : (
                <div className="row g-4">
                {cartItems.map((item, index) => (
                    <div className="col-12" key={index}>
                    <div className="card bg-secondary text-light">
                        <div className="card-body d-flex align-items-center justify-content-between">
                        <div>
                            <h5 className="card-title mb-1">{item.title}</h5>
                            <p className="card-text mb-0">
                            ${item.price} × {item.cantidad}
                            </p>
                        </div>
                        <button
                            className="btn btn-outline-danger"
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
            </div>

            {/* Footer fijo */}
            {cartItems.length > 0 && <CartFooter total={total} />}
        </div>
        </div>
    );
}

export default Cart;