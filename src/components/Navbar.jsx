import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useContext, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Collapse } from 'bootstrap'; // 👈 Importamos Collapse manualmente
import Logo from '../assets/Logo.png';

function Navbar() {
    const { cartItems } = useContext(CartContext);

    // Cierra el menú hamburguesa al hacer clic en cualquier enlace
    useEffect(() => {
        const links = document.querySelectorAll('.navbar-nav .nav-link, .navbar-icons a');
        const collapseEl = document.getElementById('navbarContent');
        const bsCollapse = new Collapse(collapseEl, { toggle: false });

        links.forEach(link => {
        link.addEventListener('click', () => {
            if (collapseEl.classList.contains('show')) {
            bsCollapse.hide();
            }
        });
        });

        // Limpieza
        return () => {
        links.forEach(link => {
            link.removeEventListener('click', () => {});
        });
        };
    }, []);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-3">
        <div className="container-fluid">
            {/* Logo */}
            <Link to="/" className="navbar-brand d-flex align-items-center">
            <img
                src={Logo}
                alt="YeahShirts Logo"
                style={{ height: '60px', marginRight: '10px' }}
            />
            <span className="fw-bold"></span>
            </Link>

            {/* Boton hamburguesa */}
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
            </button>

            {/* Contenido colapsable */}
            <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center w-100 overflow-hidden gap-3 py-3 py-lg-0">
                {/* Categorias */}
                <div className="navbar-nav d-flex flex-column flex-lg-row gap-2 gap-lg-3 text-center text-lg-start">
                <Link to="/anime" className="nav-link text-light">Anime</Link>
                <Link to="/rock" className="nav-link text-light">Rock</Link>
                <Link to="/tv" className="nav-link text-light">TV</Link>
                <Link to="/gamer" className="nav-link text-light">Gamer</Link>
                </div>

                {/* Iconos */}
                <div className="navbar-icons d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-3 mt-3 mt-lg-0">
                <Link to="/login"><FaUser className="text-light" /></Link>
                <Link to="/cart" className="text-light text-decoration-none d-flex align-items-center gap-2">
                    <FaShoppingCart />
                    <span>{cartItems.length} T-Shirts</span>
                </Link>
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;