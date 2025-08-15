import Slider from 'react-slick';
import { motion } from 'framer-motion';

    const testimonials = [
    {
        name: 'Ana Gonzalez.',
        text: 'Las camisetas son increíbles. La calidad y el diseño me encantaron.',
    },
    {
        name: 'Jesus Marin.',
        text: 'YeahShirts tiene estilo. Me preguntan todo el tiempo dónde las compré.',
    },
    {
        name: 'Luisa Fernandez.',
        text: 'Me llegó rápido y el empaque estaba brutal. ¡Repetiré seguro!',
    },
    {
        name: 'Daniel Ferrer.',
        text: 'Que bueno que tienen tallas grandes!',
    },
    {
        name: 'Jairo Ramirez.',
        text: 'Personalizan y todo, increible experiencia con Yeah!',
    },
    ];

    function Testimonials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <section className="bg-dark text-light py-5">
        <div className="container">
            <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            >
            Lo que dicen nuestros clientes
            </motion.h2>

            <Slider {...settings}>
            {testimonials.map((t, i) => (
                <div key={i}>
                <motion.div
                    className="text-center px-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="lead fst-italic">“{t.text}”</p>
                    <h5 className="mt-3 fw-bold">{t.name}</h5>
                </motion.div>
                </div>
            ))}
            </Slider>
        </div>
        </section>
    );
}

export default Testimonials;