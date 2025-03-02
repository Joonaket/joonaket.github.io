import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import History from './History';
import Now from './Now';
import Future from './Future';
import '../Submenu.css';

const DragRacingPage = ({ section }) => {
    const [activeSection, setActiveSection] = useState(section || 'now');
    const [activeNowSubSection, setActiveNowSubSection] = useState('info');
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const historyRef = useRef(null);
    const nowRef = useRef(null);
    const futureRef = useRef(null);

    useEffect(() => {
        if (section) {
            setActiveSection(section);
        }
    }, [section]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                    navigate(`/drag-racing/${entry.target.id}`);
                }
            });
        }, options);

        if (historyRef.current) observer.observe(historyRef.current);
        if (nowRef.current) observer.observe(nowRef.current);
        if (futureRef.current) observer.observe(futureRef.current);

        return () => {
            if (historyRef.current) observer.unobserve(historyRef.current);
            if (nowRef.current) observer.unobserve(nowRef.current);
            if (futureRef.current) observer.unobserve(futureRef.current);
        };
    }, [navigate]);

    const toggleMenu = () => {
        setMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    return (
        <div className="drag-racing-page">
            <h1>Drag Racing</h1>

            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>

            <div className={`time-sections ${menuOpen ? 'open' : ''}`}>
                <button
                    className={`time-button ${activeSection === 'history' ? 'active' : ''}`}
                    onClick={() => historyRef.current.scrollIntoView({ behavior: 'smooth' })}
                >
                    History
                </button>
                <div className="now-section">
                    <button
                        className={`time-button ${activeSection === 'now' ? 'active' : ''}`}
                        onClick={() => nowRef.current.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Now
                    </button>
                    {activeSection === 'now' && (
                        <div className="now-submenu">
                            <button
                                className={`now-submenu-button ${activeNowSubSection === 'info' ? 'active' : ''}`}
                                onClick={() => setActiveNowSubSection('info')}
                            >
                                Info
                            </button>
                            <button
                                className={`now-submenu-button ${activeNowSubSection === 'getting-started' ? 'active' : ''}`}
                                onClick={() => setActiveNowSubSection('getting-started')}
                            >
                                Getting started
                            </button>
                            <button
                                className={`now-submenu-button ${activeNowSubSection === 'examples' ? 'active' : ''}`}
                                onClick={() => setActiveNowSubSection('examples')}
                            >
                                Examples
                            </button>
                        </div>
                    )}
                </div>
                <button
                    className={`time-button ${activeSection === 'future' ? 'active' : ''}`}
                    onClick={() => futureRef.current.scrollIntoView({ behavior: 'smooth' })}
                >
                    Future
                </button>
            </div>

            <div className="section-content">
                <div id="history" ref={historyRef} className="section">
                    <History />
                </div>
                <div id="now" ref={nowRef} className="section">
                    <Now activeSubSection={activeNowSubSection} />
                </div>
                <div id="future" ref={futureRef} className="section">
                    <Future />
                </div>
            </div>
        </div>
    );
};

export default DragRacingPage;