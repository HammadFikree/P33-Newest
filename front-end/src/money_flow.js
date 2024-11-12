import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, LineChart, Line, CartesianGrid, ResponsiveContainer } from 'recharts';
import './money_flow.css';

const MoneyFlow = () => {
    const [monthlyCashFlowData, setMonthlyCashFlowData] = useState([]);
    const [categoryBreakdownData, setCategoryBreakdownData] = useState([]);
    const [savingsTrendData, setSavingsTrendData] = useState([]);

    useEffect(() => {
        
        fetch('http://localhost:8080/transactions/1')
            .then(response => response.json())
            .then(data => {
                
                const cashFlow = {};
                data.forEach(transaction => {
                    const date = new Date(transaction.date);
                    const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
                    const amount = parseFloat(transaction.amount.replace(/,/g, ''));

                    if (!cashFlow[monthYear]) {
                        cashFlow[monthYear] = { month: monthYear, deposits: 0, expenses: 0 };
                    }
                    if (transaction.type === 'DEPOSIT') {
                        cashFlow[monthYear].deposits += amount;
                    } else {
                        cashFlow[monthYear].expenses += Math.abs(amount);
                    }
                });
                setMonthlyCashFlowData(Object.values(cashFlow));

                
                const categories = {};
                data.forEach(transaction => {
                    const amount = parseFloat(transaction.amount.replace(/,/g, ''));
                    const category = transaction.category || 'Uncategorized';

                    if (!categories[category]) {
                        categories[category] = { name: category, value: 0 };
                    }
                    categories[category].value += transaction.type === 'DEPOSIT' ? 0 : Math.abs(amount);
                });
                setCategoryBreakdownData(Object.values(categories));

                
                const savingsTrend = [];
                let cumulativeSavings = 0;
                data.forEach(transaction => {
                    const date = new Date(transaction.date);
                    const dateStr = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
                    const amount = parseFloat(transaction.amount.replace(/,/g, ''));

                    cumulativeSavings += transaction.type === 'DEPOSIT' ? amount : -amount;
                    savingsTrend.push({ date: dateStr, savings: cumulativeSavings, spending: transaction.type === 'DEPOSIT' ? 0 : Math.abs(amount) });
                });
                setSavingsTrendData(savingsTrend);
            })
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    return (
        <div className="money-flow-container">
            <h2>Money Flow</h2>

            {/* Monthly Cash Flow Bar Chart */}
            <div className="chart-container">
                <h3>Monthly Cash Flow</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={monthlyCashFlowData}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="deposits" fill="#82ca9d" name="Deposits" />
                        <Bar dataKey="expenses" fill="#ff0000" name="Expenses" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Category Breakdown Pie Chart */}
            <div className="chart-container">
                <h3>Category Breakdown</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie data={categoryBreakdownData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>

            {/* Savings vs. Spending Trend Line Chart */}
            <div className="chart-container">
                <h3>Savings vs. Spending Trend</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={savingsTrendData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Line type="monotone" dataKey="savings" stroke="#82ca9d" name="Savings" />
                        <Line type="monotone" dataKey="spending" stroke="#ff0000" name="Spending" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default MoneyFlow;
