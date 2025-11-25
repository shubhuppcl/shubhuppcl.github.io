import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
    const experiences = [
        {
            title: 'Assistant Engineer',
            company: 'Power Management Cell, UPPCL',
            period: '2021 - Present',
            description: [
                'Developed automated Telegram Bot for Grid & Market data delivery, improving reporting efficiency.',
                'Created multiple Python and Excel-based operational scripts to support the daily bidding process in power exchanges.',
                'Improved bid clearance ratio and optimized marginal cost vs. bidding price gaps using analytical methods.',
                'Supported real-time operational decision-making, contributing to reduced system costs.'
            ]
        },
        {
            title: 'Sub Divisional Officer',
            company: 'Electricity Distribution - Sitapur Town & Mahmudabad',
            period: '2016 - 2021',
            description: [
                'Cleaned and standardized large volumes of consumer and billing data.',
                'Conducted statistical tests for decision support.',
                'Managed distribution operations and maintenance.'
            ]
        }
    ];

    return (
        <section id="experience" className="section">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Work Experience
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            style={{
                                background: 'var(--card-bg)',
                                border: '1px solid var(--card-border)',
                                borderRadius: '15px',
                                padding: '30px',
                                backdropFilter: 'blur(10px)',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '4px',
                                height: '100%',
                                background: 'var(--accent-color)'
                            }} />

                            <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>{exp.title}</h3>
                                    <h4 style={{ color: 'var(--accent-color)', fontSize: '1.1rem' }}>{exp.company}</h4>
                                </div>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    color: '#888',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '5px 15px',
                                    borderRadius: '20px',
                                    height: 'fit-content'
                                }}>
                                    <FaBriefcase />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'disc', paddingLeft: '20px', color: '#ccc' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ marginBottom: '10px' }}>{item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
