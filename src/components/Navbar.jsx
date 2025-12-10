import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Home', id: 'hero' },
        { title: 'DAM Forecast', url: 'https://shubhuppcl.github.io/DAMforecast', external: true },
        { title: 'Experience', id: 'experience' },
        { title: 'Skills', id: 'skills' },
        { title: 'Contact', id: 'contact' },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            padding: '20px 0',
            transition: 'all 0.3s ease',
            borderBottom: scrolled ? '1px solid var(--card-border)' : 'none'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--accent-color)', cursor: 'pointer' }}
                    onClick={() => scrollToSection('hero')}
                >
                    Shubham Singh
                </motion.div>

                {/* Desktop Menu */}
                <ul style={{ display: 'flex', gap: '30px', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link, index) => (
                        <motion.li
                            key={link.title}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {link.external ? (
                                <a
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        color: 'var(--text-color)',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        textDecoration: 'none'
                                    }}
                                    className="nav-link"
                                >
                                    {link.title}
                                </a>
                            ) : (
                                <button
                                    onClick={() => scrollToSection(link.id)}
                                    style={{
                                        color: 'var(--text-color)',
                                        fontSize: '1rem',
                                        fontWeight: '500',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                    className="nav-link"
                                >
                                    {link.title}
                                </button>
                            )}
                        </motion.li>
                    ))}
                    <motion.li
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <a href="https://github.com/shubhuppcl" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem' }}>
                            <FaGithub />
                        </a>
                    </motion.li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" style={{ display: 'none', fontSize: '1.5rem', cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            height: '100vh',
                            width: '70%',
                            background: 'var(--secondary-color)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '40px',
                            zIndex: 999,
                            boxShadow: '-5px 0 15px rgba(0,0,0,0.5)'
                        }}
                    >
                        {navLinks.map((link) => (
                            link.external ? (
                                <a
                                    key={link.title}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ fontSize: '1.5rem', color: 'var(--text-color)', textDecoration: 'none' }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.title}
                                </a>
                            ) : (
                                <button
                                    key={link.title}
                                    onClick={() => scrollToSection(link.id)}
                                    style={{ fontSize: '1.5rem', color: 'var(--text-color)' }}
                                >
                                    {link.title}
                                </button>
                            )
                        ))}
                    </motion.div>
                )}
            </div>
            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        .nav-link:hover { color: var(--accent-color) !important; }
      `}</style>
        </nav>
    );
};

export default Navbar;
