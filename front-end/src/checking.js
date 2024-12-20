import React, { useEffect, useState } from 'react';
import './checking.css';

const Checking = () => {
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/transactions/1')
            .then(response => response.json())
            .then(data => {
            
                const sortedTransactions = data.sort((a, b) => new Date(b.date) - new Date(a.date));
                
                setTransactions(sortedTransactions);

                if (sortedTransactions.length > 0) {
                    setBalance(sortedTransactions[0].balance);
                }
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    return (
        <div className="account-container">

            <div className="balance-overview">
                <p className="balance-amount">${balance !== null ? balance : 'Loading...'}</p>
                <p className="balance-label">Available Balance</p>
            </div>

            <div className="transactions-section">
                <h3 className="transactions-title">Transactions</h3>
                <div className="transaction-list">
                    {transactions.map((transaction, index) => (
                        <div key={index} className="transaction-item">
                            <div className="transaction-info">
                                <p className="transaction-date">{transaction.date}</p>
                                <p className="transaction-type">{transaction.type}</p>
                            </div>
                            <div className={`transaction-amount ${transaction.type === 'DEPOSIT' ? 'positive' : 'negative'}`}>
                                {transaction.type === 'DEPOSIT' ? '$ +' : "$ "}{transaction.amount}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Checking;
