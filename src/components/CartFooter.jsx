function CartFooter({ total }) {
    return (
        <div className="cart-footer p-4 border-top border-secondary">
        <div className="d-flex justify-content-between align-items-center">
            <h4 className="mb-0">Total: ${total.toFixed(2)}</h4>
            <button className="btn btn-success">Finalizar compra</button>
        </div>
        </div>
    );
}

export default CartFooter;