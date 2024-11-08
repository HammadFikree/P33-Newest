import React from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <footer className="nav-bar">
            <button className="nav-icon" onClick={() => navigate('/')}>
                <img src="\icons\home_Icon.png" alt="Home" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/persona')}>
                <img src="icons/placeholder.png" alt="Persona" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/analytics')}>
                <img src="icons/placeholder.png" alt="Analytics" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/extra')}>
                <img src="icons/placeholder.png" alt="Extra" />
            </button>
        </footer>
    );
};

export default NavigationBar;
