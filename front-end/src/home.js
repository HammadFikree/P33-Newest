import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleAccountClick = () => {
        navigate('/checking');
    };

    return (
        <div className="container">
            {/* Greeting Section */}
            <h1 className="greeting">Hello NAME</h1>

            {/* Analytics Section */}
            <div className="analytics-section">
                <div className="analytics-icon">
                    {/* Placeholder for icon, can be replaced with an actual icon in CSS */}
                    <span>Analytics</span>
                </div>
                <div className="analytics-info">
                    <p>Money in this month</p>
                    <p className="amount">#####.##</p>
                    <p>Money in this month</p>
                    <p className="amount">#####.##</p>
                </div>
            </div>

            {/* Options Section */}
            <div className="options-section">
                <button className="option-button">Option #1</button>
                <button className="option-button">Option #1</button>
                <button className="option-button">Option #1</button>
            </div>

            {/* Bank Accounts Section */}
            <div className="accounts-section">
                <h2 className="section-title">Bank Accounts</h2>
                <div className="account" onClick={handleAccountClick}>
                    <p className="account-type">Checking (...0000)</p>
                    <p className="account-balance">$0000.00</p>
                    <p className="balance-label">Available Balance</p>
                </div>
                <div className="account" onClick={handleAccountClick}>
                    <p className="account-type">Savings (...0000)</p>
                    <p className="account-balance">$0000.00</p>
                    <p className="balance-label">Available Balance</p>
                </div>
                <div className="account" onClick={handleAccountClick}>
                    <p className="account-type">Checking (...0000)</p>
                    <p className="account-balance">$0000.00</p>
                    <p className="balance-label">Available Balance</p>
                </div>
                <div className="account" onClick={handleAccountClick}>
                    <p className="account-type">Checking (...0000)</p>
                    <p className="account-balance">$0000.00</p>
                    <p className="balance-label">Available Balance</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
