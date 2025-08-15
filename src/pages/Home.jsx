import { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Testimonials from '../components/Testimonials';
import '../assets/styles.css';
import Rockfront from '../assets/Rockfront.png';
import Tvfront from '../assets/Tvfront.png';
import Animefront from '../assets/Animefront.png';
import Gamerfront from '../assets/Gamerfront.png';
import products from '../data/products';
import Logo2 from '../assets/Logo yeah.png';
import Contactanos from '../components/Contactanos';
import { toast } from 'react-toastify';

function Home() {
    const { addToCart, cartItems } = useContext(CartContext);
    const [addedItems, setAddedItems] = useState([]);

    const categorias = [
        { nombre: 'Anime', imagen: Animefront, ruta: '/anime' },
        { nombre: 'Rock', imagen: Rockfront, ruta: '/rock' },
        { nombre: 'TV', imagen: Tvfront, ruta: '/tv' },
        { nombre: 'Gamer', imagen: Gamerfront, ruta: '/gamer' },
    ];

    const scrollToCategorias = () => {
        const section = document.getElementById('categorias');
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleAddToCart = (product) => {
        const alreadyInCart = cartItems.some(item => item.id === product.id);

        if (!alreadyInCart) {
        addToCart(product);
        setAddedItems(prev => [...prev, product.id]);

        toast.success(`🛒 "${product.title}" agregado al carrito`, {
            position: 'bottom-right',
            autoClose: 2000,
        });
        } else {
        toast.info(`⚠️ "${product.title}" ya está en el carrito`, {
            position: 'bottom-right',
            autoClose: 2000,
        });
        }
    };

    return (
        <div className="text-light">
        {/* Hero */}
        <section className="container py-5 text-center">
            <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            >
            <motion.img
                src={Logo2}
                alt="YeahShirts Logo"
                className="img-fluid mb-3"
                initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                style={{ maxHeight: '200px' }}
            />
            <h1 className="display-2 fw-bold">YeahShirts</h1>
            <p className="lead text-primery">
                Camisetas con actitud. Diseño único, estilo auténtico.
            </p>
            <button onClick={scrollToCategorias} className="btn-yeah">
                Explora la colección
            </button>
            </motion.div>
        </section>

        {/* Categorias */}
        <section id="categorias" className="container py-5">
            <h2 className="mb-4">Categorías destacadas</h2>
            <div className="row g-4">
            {categorias.map((cat, i) => (
                <motion.div
                key={cat.nombre}
                className="col-md-3"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                >
                <Link to={cat.ruta} className="text-decoration-none">
                    <div className="card bg-dark text-light h-100 shadow-sm">
                    <img src={cat.imagen} alt={cat.nombre} className="card-img-top img-fluid" />
                    <div className="card-body text-center">
                        <h5 className="card-title">{cat.nombre}</h5>
                    </div>
                    </div>
                </Link>
                </motion.div>
            ))}
            </div>
        </section>

        {/* Productos populares */}
        <section className="container py-5">
            <h2 className="mb-4">Lo más popular</h2>
            <div className="row g-4">
            {Object.values(products).flat().filter(p => p.popular).map((prod, i) => {
                const isAdded = cartItems.some(item => item.id === prod.id);
                return (
                <motion.div
                    key={prod.id}
                    className="col-md-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.2 }}
                >
                    <div className="card bg-dark border-light text-light h-80">
                    <img
                        src={prod.image}
                        className="card-img-top"
                        alt={prod.title}
                        style={{ objectFit: 'cover', height: '300px' }}
                    />
                    <div className="card-body">
                        <h5 className="card-title">{prod.title}</h5>
                        <p className="card-text">${prod.price}</p>
                        <button
                        className={`btn-yeah ${isAdded ? 'btn-success' : ''}`}
                        onClick={() => handleAddToCart(prod)}
                        disabled={isAdded}
                        >
                        {isAdded ? 'Agregado ✅' : 'Comprar ahora'}
                        </button>
                    </div>
                    </div>
                </motion.div>
                );
            })}
            </div>
        </section>

        {/* Frase de Yeah */}
        <section className="container-frase">
            <motion.h3
            className="text-light fw-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            >
            “Hacemos realidad tus sueños en T-Shirt's.”
            </motion.h3>
        </section>

        <Testimonials />
        <Contactanos />
        </div>
    );
}

export default Home;