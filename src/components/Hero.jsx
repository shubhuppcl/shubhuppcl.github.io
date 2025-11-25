import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            paddingTop: '80px'
        }}>
            {/* Background Glow */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '600px',
                height: '600px',
                background: 'radial-gradient(circle, rgba(0, 242, 255, 0.1) 0%, rgba(10, 10, 10, 0) 70%)',
                zIndex: -1
            }} />

            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '1.5rem', color: 'var(--accent-color)', marginBottom: '20px' }}>
                        Hello, I'm
                    </h2>
                    <h1 style={{
                        fontSize: 'clamp(3rem, 8vw, 5rem)',
                        fontWeight: '800',
                        lineHeight: '1.1',
                        marginBottom: '20px',
                        background: 'linear-gradient(to right, #fff, #a5a5a5)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Shubham Singh
                    </h1>
                    <h3 style={{ fontSize: 'clamp(1.2rem, 4vw, 2rem)', color: '#888', marginBottom: '40px' }}>
                        Assistant Engineer | Power Management Expert | Python Developer
                    </h3>

                    <p style={{ maxWidth: '600px', margin: '0 auto 50px', fontSize: '1.1rem', color: '#ccc' }}>
                        Leveraging engineering skills and analytical mindset to enhance operational performance
                        and support strategic decision-making at UPPCL.
                    </p>

                    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '15px 30px',
                                background: 'var(--accent-color)',
                                color: '#000',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '1rem'
                            }}
                        >
                            <FaEnvelope /> Contact Me
                        </motion.a>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                padding: '15px 30px',
                                border: '2px solid var(--accent-color)',
                                color: 'var(--accent-color)',
                                fontWeight: 'bold',
                                borderRadius: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                fontSize: '1rem'
                            }}
                            onClick={() => window.print()} // Simple resume print for now
                        >
                            <FaDownload /> Download Resume
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
