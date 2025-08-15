import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-dark border-top border-secondary py-4 mt-5">
        <div className="container text-center text-secondary">
            <p>&copy; {new Date().getFullYear()} YeahShirts. Todos los derechos reservados.</p>
            <p>
            <Link to="/about" className="text-light text-decoration-none me-3">Sobre nosotros</Link>
            <Link to="/contact" className="text-light text-decoration-none">Contacto</Link>
            </p>
            <hr className="border-secondary my-3" />
            <p className="text-light fst-italic">
            Este proyecto fue desarrollado por <strong>Russo</strong> como parte de su preparación profesional como Front-End Developer.
            </p>
        </div>
        </footer>
    );
}

export default Footer;