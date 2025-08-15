import React from 'react';

const Contactanos = () => {
    return (
        <section className="contactanos-section py-5 px-3">
        <div className="container text-center">
            <h2 className="mb-4 text-light">Contáctanos</h2>
            <form className="contact-form mx-auto" style={{ maxWidth: '500px' }}>
            <div className="mb-3 text-start">
                <label htmlFor="nombre" className="form-label text-light">Nombre</label>
                <input
                type="text"
                id="nombre"
                name="nombre"
                className="form-control bg-dark text-light border-secondary"
                placeholder="Tu nombre"
                required
                />
            </div>
            <div className="mb-4 text-start">
                <label htmlFor="correo" className="form-label text-light">Correo electrónico</label>
                <input
                type="email"
                id="correo"
                name="correo"
                className="form-control bg-dark text-light border-secondary"
                placeholder="tucorreo@email.com"
                required
                />
            </div>
            <button
                type="submit"
                className="btn btn-magenta w-100"
            >
                Enviar
            </button>
            </form>
        </div>
        </section>
    );
};

export default Contactanos;
