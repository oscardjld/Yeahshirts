
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ id, title, image, price }) {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="card bg-dark text-light h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
            <button
            className="btn btn-outline-light mt-auto"
            onClick={() => addToCart({ id, title, image, price })}
            >
            Agregar al carrito
            </button>
        </div>
        </div>
    );
}

export default ProductCard;