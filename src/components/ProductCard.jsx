import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ id, title, image, price }) {
    const { addToCart } = useContext(CartContext);
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = () => {
        addToCart({ id, title, image, price });
        setIsAdded(true);

        // volver a estado normal 
        setTimeout(() => setIsAdded(false), 10000);
    };

    return (
        <div className="card bg-dark text-light h-100">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${price}</p>
            <button
            className={`btn-yeah ${isAdded ? 'btn-success' : ''}`}
            onClick={handleAddToCart}
            disabled={isAdded}
            >
            {isAdded ? 'Agregado ✅' : 'Comprar ahora'}
            </button>
        </div>
        </div>
    );
}

export default ProductCard;