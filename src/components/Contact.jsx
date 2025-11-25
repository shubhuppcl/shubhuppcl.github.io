import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Get In Touch
                </motion.h2>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '40px',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    <motion.a
                        href="mailto:Shubham.singh@uppcl.org"
                        className="contact-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        style={{
                            flex: '1 1 250px',
                            background: 'var(--card-bg)',
                            padding: '30px',
                            borderRadius: '15px',
                            textAlign: 'center',
                            border: '1px solid var(--card-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '15px'
                        }}
                    >
                        <FaEnvelope style={{ fontSize: '2rem', color: 'var(--accent-color)' }} />
                        <h3 style={{ fontSize: '1.2rem' }}>Email</h3>
                        <p style={{ color: '#ccc', wordBreak: 'break-all' }}>Shubham.singh@uppcl.org</p>
                    </motion.a>

                    <motion.a
                        href="tel:8853542481"
                        className="contact-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        whileHover={{ y: -5 }}
                        style={{
                            flex: '1 1 250px',
                            background: 'var(--card-bg)',
                            padding: '30px',
                            borderRadius: '15px',
                            textAlign: 'center',
                            border: '1px solid var(--card-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '15px'
                        }}
                    >
                        <FaPhone style={{ fontSize: '2rem', color: 'var(--accent-color)' }} />
                        <h3 style={{ fontSize: '1.2rem' }}>Phone</h3>
                        <p style={{ color: '#ccc' }}>8853542481</p>
                    </motion.a>

                    <motion.a
                        href="https://github.com/shubhuppcl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ y: -5 }}
                        style={{
                            flex: '1 1 250px',
                            background: 'var(--card-bg)',
                            padding: '30px',
                            borderRadius: '15px',
                            textAlign: 'center',
                            border: '1px solid var(--card-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '15px'
                        }}
                    >
                        <FaGithub style={{ fontSize: '2rem', color: 'var(--accent-color)' }} />
                        <h3 style={{ fontSize: '1.2rem' }}>GitHub</h3>
                        <p style={{ color: '#ccc' }}>github.com/shubhuppcl</p>
                    </motion.a>

                    <motion.div
                        className="contact-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        style={{
                            flex: '1 1 250px',
                            background: 'var(--card-bg)',
                            padding: '30px',
                            borderRadius: '15px',
                            textAlign: 'center',
                            border: '1px solid var(--card-border)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '15px'
                        }}
                    >
                        <FaMapMarkerAlt style={{ fontSize: '2rem', color: 'var(--accent-color)' }} />
                        <h3 style={{ fontSize: '1.2rem' }}>Location</h3>
                        <p style={{ color: '#ccc' }}>Lucknow, UP</p>
                    </motion.div>
                </div>

                <footer style={{ marginTop: '80px', textAlign: 'center', color: '#666', padding: '20px 0', borderTop: '1px solid var(--card-border)' }}>
                    <p>© {new Date().getFullYear()} Shubham Singh. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
