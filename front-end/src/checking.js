import React from 'react';
import './checking.css';

const checking = () => {
    return (
        <div className="account-container">
            {/* Balance Overview */}
            <div className="balance-overview">
                <p className="balance-amount">$0000.00</p>
                <p className="balance-label">Available Balance</p>
            </div>

            {/* Account Details Section */}
            <div className="account-details">
                <h3 className="details-title">Account Details</h3>
                <p className="detail-label">Available Balance</p>
                <p className="detail-amount">$0000.00</p>
                <p className="detail-label">Present Balance</p>
                <p className="detail-amount">$0000.00</p>
                <button className="details-button">Show Details <span className="arrow-icon">▼</span></button>
            </div>

            {/* Transactions Section */}
            <div className="transactions-section">
                <h3 className="transactions-title">See all transactions <span className="arrow-icon">➔</span></h3>
                <div className="transaction-list">
                    {/* Placeholder for each transaction */}
                    <div className="transaction-item">
                        <div className="transaction-info">
                            {/* Placeholder content for transaction */}
                            <div className="transaction-description"></div>
                        </div>
                        <div className="transaction-amount"></div>
                    </div>
                    {/* Repeat transaction items as needed */}
                </div>
            </div>
        </div>
    );
};

export default checking;
