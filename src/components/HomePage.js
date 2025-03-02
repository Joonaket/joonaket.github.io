import React from 'react';
import { useNavigate } from 'react-router-dom';
import circuitImage from './mobilecircuit.jpg';
import driftImage from './mobiledrift.jpg';
import dragImage from './mobiledrag.jpg';
import racingBanner from './banner.png';
import './FrontPage.css';

const HomePage = () => {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <div className="home-page">
            <div className="racing-banner-container horizontal-menu">
                <img src={racingBanner} alt="Racing Types" className="racing-banner"/>

                <div className="clickable-areas-layer"> {/* Layer for clickable areas */}
                    <div
                        className="clickable-area circuit-area"
                        onClick={() => handleNavigate('/circuit-racing')}
                        title="Circuit Racing"
                    ></div>

                    <div
                        className="clickable-area drift-area"
                        onClick={() => handleNavigate('/drifting')}
                        title="Drifting"
                    ></div>

                    <div
                        className="clickable-area drag-area"
                        onClick={() => handleNavigate('/drag-racing')}
                        title="Drag Racing"
                    ></div>
                </div>

                <div className="titles-layer"> {/* Layer for titles only */}
                    <h2 className="area-title circuit-title">Circuit</h2>
                    <h2 className="area-title drift-title">Drift</h2>
                    <h2 className="area-title drag-title">Drag</h2>
                </div>
            </div>

            <div className="instruction-header">
                <h2>Pick your poison</h2>
            </div>

            <div className="vertical-menu">
                <div
                    className="menu-item"
                    style={{backgroundImage: `url(${circuitImage})`}}
                    onClick={() => handleNavigate('/circuit-racing')}
                    title="Circuit Racing"
                >
                    <h2 className="menu-title">Circuit</h2>
                </div>

                <div
                    className="menu-item"
                    style={{backgroundImage: `url(${driftImage})`}}
                    onClick={() => handleNavigate('/drifting')}
                    title="Drifting"
                >
                    <h2 className="menu-title">Drift</h2>
                </div>

                <div
                    className="menu-item"
                    style={{backgroundImage: `url(${dragImage})`}}
                    onClick={() => handleNavigate('/drag-racing')}
                    title="Drag Racing"
                >
                    <h2 className="menu-title">Drag</h2>
                </div>
            </div>
        </div>
    );
};

export default HomePage;