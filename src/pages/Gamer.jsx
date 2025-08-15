
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Gamer() {
    return (
        <div className="container py-5">
        <h2 className="text-light mb-4">Franelas Gamer</h2>
        <div className="row g-4">
            {products.gamer.map((product) => (
            <div className="col-md-4" key={product.id}>
                <ProductCard
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                />
            </div>
            ))}
        </div>
        </div>
    );
}

export default Gamer;