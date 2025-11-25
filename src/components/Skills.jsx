import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaTable, FaChartLine, FaBolt, FaDatabase, FaCogs } from 'react-icons/fa';

const Skills = () => {
    const skills = [
        { name: 'Python', icon: <FaPython />, level: 'Advanced', category: 'Technical' },
        { name: 'Pandas & NumPy', icon: <FaDatabase />, level: 'Advanced', category: 'Technical' },
        { name: 'Scikit-learn', icon: <FaCogs />, level: 'Intermediate', category: 'Technical' },
        { name: 'Power Management', icon: <FaBolt />, level: 'Expert', category: 'Domain' },
        { name: 'Data Forecasting', icon: <FaChartLine />, level: 'Advanced', category: 'Analytical' },
        { name: 'MS Excel', icon: <FaTable />, level: 'Advanced', category: 'Tools' },
    ];

    return (
        <section id="skills" className="section" style={{ background: 'var(--secondary-color)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Technical Skills
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '30px'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            style={{
                                background: 'var(--bg-color)',
                                padding: '30px',
                                borderRadius: '15px',
                                textAlign: 'center',
                                border: '1px solid var(--card-border)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                            }}
                        >
                            <div style={{
                                fontSize: '3rem',
                                color: 'var(--accent-color)',
                                marginBottom: '20px'
                            }}>
                                {skill.icon}
                            </div>
                            <h3 style={{ marginBottom: '10px', fontSize: '1.2rem' }}>{skill.name}</h3>
                            <p style={{ color: '#888', fontSize: '0.9rem' }}>{skill.category}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
