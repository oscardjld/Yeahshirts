import React from 'react';
import camisetasData from '../data/products';


import Anime1 from '../assets/Anime (1).png';
import Anime2 from '../assets/Anime (2).png';
import Anime3 from '../assets/Anime (3).png';
import Anime4 from '../assets/Anime (4).png';
import Anime5 from '../assets/Anime (5).png';
import Anime6 from '../assets/Anime (6).png';
import Anime7 from '../assets/Anime (7).png';
import Anime8 from '../assets/Anime (8).png';

const imagenes = {
    'Anime (1).png': Anime1,
    'Anime (2).png': Anime2,
    'Anime (3).png': Anime3,
    'Anime (4).png': Anime4,
    'Anime (5).png': Anime5,
    'Anime (6).png': Anime6,
    'Anime (7).png': Anime7,
    'Anime (8).png': Anime8,
    };

    const Camisetas = () => {
    return (
        <div className="container py-5">
        <h2 className="text-center mb-4">🧥 Nuestras Camisetas</h2>
        <div className="row">
            {camisetasData.map((Anime) => (
            <div key={camiseta.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                <img
                    src={imagenes[Anime.imagen]}
                    alt={Anime.nombre}
                    className="card-img-top img-fluid"
                />
                </div>
            </div>
            ))}
        </div>
        </div>
    );
};

export default Camisetas;