import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import History from './History';
import Now from './Now';
import Future from './Future';

const DriftingPage = ({ section }) => {
    const [activeSection, setActiveSection] = useState(section || 'now');
    const navigate = useNavigate();

    useEffect(() => {
        if (section) {
            setActiveSection(section);
        }
    }, [section]);

    const handleSectionChange = (newSection) => {
        setActiveSection(newSection);
        navigate(`/drifting/${newSection}`);
    };

    return (
        <div className="drifting-page">
            <h1>Drifting</h1>

            <div className="racing-links">
                <Link to="/circuit-racing" className="racing-link">Circuit Racing</Link>
                <Link to="/drag-racing" className="racing-link">Drag Racing</Link>
            </div>

            <div className="time-sections">
                <button
                    className={`time-button ${activeSection === 'history' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('history')}
                >
                    History
                </button>
                <button
                    className={`time-button ${activeSection === 'now' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('now')}
                >
                    Now
                </button>
                <button
                    className={`time-button ${activeSection === 'future' ? 'active' : ''}`}
                    onClick={() => handleSectionChange('future')}
                >
                    Future
                </button>
            </div>

            <div className="section-content">
                {activeSection === 'history' && <History />}
                {activeSection === 'now' && <Now />}
                {activeSection === 'future' && <Future />}
            </div>
        </div>
    );
};

export default DriftingPage;
