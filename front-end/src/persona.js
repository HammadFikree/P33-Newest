import React from 'react';
import './persona.css';

const Persona = () => {
    return (
        <div className="persona-container">
            <h2 className="persona-title">Personal</h2>

            <div className="persona-section">
                <div className="persona-item">
                    <h3 className="item-title">Security Settings</h3>
                    <p className="item-description">Enable two-factor authentication, set up transaction...</p>
                </div>
                <div className="persona-item">
                    <h3 className="item-title">Notifications</h3>
                    <p className="item-description">Customize alerts for account activity, balance changes...</p>
                </div>
                <div className="persona-item">
                    <h3 className="item-title">Preferences</h3>
                    <p className="item-description">Set your default account, change your PIN, and manage...</p>
                </div>
                <div className="persona-item">
                    <h3 className="item-title">Biometrics</h3>
                    <p className="item-description">Enable fingerprint or facial recognition for quick...</p>
                </div>
                <div className="persona-item">
                    <h3 className="item-title">Budgeting</h3>
                    <p className="item-description">Set up budgets, track spending, and receive alerts...</p>
                </div>
                <div className="persona-item">
                    <h3 className="item-title">Savings goals</h3>
                    <p className="item-description">Create savings goals, track your progress, and automate...</p>
                </div>
                <div className="persona-item">
                    <h3 className="item-title">Bill pay</h3>
                    <p className="item-description">Manage your bills, set up automatic payments...</p>
                </div>
                <div className="persona-item">
                    <h3 className="item-title">App appearance</h3>
                    <p className="item-description">Customize the look and feel of your app, including themes...</p>
                </div>
                <div className="persona-item">
                    <h3 className="item-title">Customer Service</h3>
                    <p className="item-description"></p>
                </div>
            </div>
        </div>
    );
};

export default Persona;
