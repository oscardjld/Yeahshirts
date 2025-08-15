import { Link } from 'react-router-dom';

const Home = () => {
    const categorias = [
        { nombre: 'Anime', imagen: AnimeImg, ruta: '/anime' },
        { nombre: 'Rock', imagen: RockImg, ruta: '/rock' },
        { nombre: 'TV', imagen: TVImg, ruta: '/tv' },
        { nombre: 'Gamer', imagen: GamerImg, ruta: '/gamer' },
    ];

    return (
        <div className="container py-5">
        <h2 className="text-center text-light mb-4">🎸 Explora por categoría</h2>
        <div className="row">
            {categorias.map((cat) => (
            <div key={cat.nombre} className="col-md-3 mb-4">
                <Link to={cat.ruta} className="text-decoration-none">
                <div className="card bg-dark text-light h-100 shadow-sm">
                    <img src={cat.imagen} alt={cat.nombre} className="card-img-top img-fluid" />
                    <div className="card-body text-center">
                    <h5 className="card-title">{cat.nombre}</h5>
                    </div>
                </div>
                </Link>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Home;