import React from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

const NavigationBar = () => {
    const navigate = useNavigate();

    return (
        <footer className="nav-bar">
            <button className="nav-icon" onClick={() => navigate('/')}>
                <img src="/icons/placeholder.png" alt="Home" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/profile')}>
                <img src="/icons/placeholder.png" alt="Profile" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/analytics')}>
                <img src="/icons/placeholder.png" alt="Analytics" />
            </button>
            <button className="nav-icon" onClick={() => navigate('/settings')}>
                <img src="/icons/placeholder.png" alt="Menu" />
            </button>
        </footer>
    );
};

export default NavigationBar;
