import React from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

import homeIcon from './icons/home_icon.png';
import personaIcon from './icons/persona_icon.png';
import analyticsIcon from './icons/analytics_icon.png';
import extrasIcon from './icons/extras_icon.png';

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <footer className="nav-bar">
            <button className="nav-icon" onClick={() => navigate('/')}>
                <img src={homeIcon} alt="Home" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/persona')}>
                <img src={personaIcon} alt="Persona" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/analytics')}>
                <img src={analyticsIcon} alt="Analytics" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/extra')}>
                <img src={extrasIcon} alt="Extra" />
            </button>
        </footer>
    );
};

export default NavigationBar;
