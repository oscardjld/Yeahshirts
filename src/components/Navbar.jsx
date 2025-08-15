import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Logo from '../assets/Logo.png'



function Navbar() {
    const { cartItems } = useContext(CartContext);

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


            {/* Botonsito hamburguesa */}
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

            {/* Colapsable OJO */}
            <div className="collapse navbar-collapse" id="navbarContent">
            <div className="d-lg-flex justify-content-between w-100 align-items-center">
                {/* Categorias */}
                <div className="navbar-nav gap-3">
                <Link to="/anime" className="nav-link text-light">Anime</Link>
                <Link to="/rock" className="nav-link text-light">Rock</Link>
                <Link to="/tv" className="nav-link text-light">TV</Link>
                <Link to="/gamer" className="nav-link text-light">Gamer</Link>
                </div>

                {/* Iconos */}
                <div className="d-flex gap-3 mt-3 mt-lg-0">
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