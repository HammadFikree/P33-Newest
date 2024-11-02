import React from 'react';
import './home.css';
import NavigationBar from './nav';

const home = () => {
    return (
        <div className="home">
            <header className="header">
            </header>

            <h1 className="title">Hello Name</h1>

            <div className="analytics-section">
                <div className="analytics-content">
                    <h3>Analytics</h3>
                    <p>Money in this month: $####.##</p>
                    <p>Money out this month: $####.##</p>
                </div>
            </div>

            <div className="options">
                <button className="option-button">Option #1</button>
                <button className="option-button">Option #2</button>
                <button className="option-button">Option #3</button>
            </div>

            <section className="acc-section">
                <h2>Bank Accounts</h2>
                <div className="acc-card">
                    <p>Checking (...0000)</p>
                    <p className="balance">$0000.00 Available Balance</p>
                </div>
                <div className="acc-card">
                    <p>Savings (...0000)</p>
                    <p className="balance">$0000.00 Available Balance</p>
                </div>
            </section>

            <NavigationBar />
        </div>
    );
};

export default home;