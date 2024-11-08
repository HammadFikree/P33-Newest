import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
    const navigate = useNavigate();
    const [balance, setBalance] = useState(null);
    const [moneyIn, setMoneyIn] = useState(0);
    const [moneyOut, setMoneyOut] = useState(0);

    useEffect(() => {
        fetch('http://localhost:8080/transactions/1')
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    const latestBalance = data[data.length - 1].balance;
                    setBalance(latestBalance);

                
                    let totalIn = 0;
                    let totalOut = 0;
                    data.forEach(transaction => {
                        const amount = parseFloat(transaction.amount.replace(/,/g, ''));
                        if (transaction.type === 'DEPOSIT') {
                            totalIn += amount;
                        } else {
                            totalOut += Math.abs(amount);
                        }
                    });

                    setMoneyIn(totalIn.toFixed(2));
                    setMoneyOut(totalOut.toFixed(2));
                }
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    const handleAccountClick = () => {
        navigate('/checking');
    };

    return (
        <div className="container">
            <h1 className="greeting">Hello NAME</h1>

            {/* Analytics */}
            <div className="analytics-section">
                <div className="analytics-icon">
                    <span>Analytics</span>
                </div>
                <div className="analytics-info">
                    <p>Money In This Month</p>
                    <p className="amount">${moneyIn}</p>
                    <p>Money Out This Month</p>
                    <p className="amount">${moneyOut}</p>
                </div>
            </div>

            {/* Bank Accounts */}
            <div className="accounts-section">
                <h2 className="section-title">Bank Accounts</h2>
                <div className="account" onClick={handleAccountClick}>
                    <p className="account-type">Checking (...0000)</p>
                    <p className="account-balance">${balance !== null ? balance : 'Loading...'}</p>
                    <p className="balance-label">Available Balance</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
