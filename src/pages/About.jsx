import { motion } from 'framer-motion';

function About() {
    return (
        <div className="container py-5 text-light">
        <motion.h2
            className="mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            Sobre YeahShirts
        </motion.h2>

        <motion.p
            className="text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
        >
            <strong>YeahShirts</strong> es un proyecto ficticio de e-commerce creado con React, Vite y Bootstrap.
            Su objetivo es demostrar cómo se puede combinar diseño, funcionalidad y estructura profesional
            en una aplicación moderna. Cada componente está cuidadosamente comentado y estructurado para facilitar
            la comprensión y el mantenimiento.
        </motion.p>

        <motion.p
            className="mt-4 text-secondary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            Este proyecto fue desarrollado por <strong>Russo</strong> como parte de su preparación para convertirse
            en Front-End Developer. Refleja su pasión por el diseño, la claridad en el código y la experiencia del usuario.
        </motion.p>
        </div>
);
}

export default About;