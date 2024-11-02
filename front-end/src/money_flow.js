import React from 'react';
import './money_flow.css';
import {LineChart, Line, PieChart, Pie, Tooltip} from 'recharts';

const data = [];
const money_flow = () => (
    <div>
        <h2>Money Flow</h2>
        <LineChart data={data}>
            
        </LineChart>
    </div>
);

export default money_flow;