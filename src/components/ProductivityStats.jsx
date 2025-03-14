import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './ProductivityStats.css';

// Sample data for charts
const data = [
    { name: 'Mon', TasksCompleted: 3, TimeSpent: 2 },
    { name: 'Tue', TasksCompleted: 5, TimeSpent: 3 },
    { name: 'Wed', TasksCompleted: 2, TimeSpent: 1 },
    { name: 'Thu', TasksCompleted: 6, TimeSpent: 4 },
    { name: 'Fri', TasksCompleted: 4, TimeSpent: 3 },
    { name: 'Sat', TasksCompleted: 7, TimeSpent: 5 },
    { name: 'Sun', TasksCompleted: 2, TimeSpent: 1 },
];

// Calculating statistics
const totalTasks = data.reduce((acc, day) => acc + day.TasksCompleted, 0);
const totalTime = data.reduce((acc, day) => acc + day.TimeSpent, 0);
const avgTimePerTask = totalTime / totalTasks || 0;
const maxTasks = Math.max(...data.map(day => day.TasksCompleted));
const minTasks = Math.min(...data.map(day => day.TasksCompleted));
const maxTime = Math.max(...data.map(day => day.TimeSpent));
const minTime = Math.min(...data.map(day => day.TimeSpent));

const ProductivityStats = () => {
    return (
        <div className="productivity-stats">
            <h1>📊 Productivity Stats</h1>

            {/* Display overall stats */}
            <div className="stats-summary">
                <div className="stat-item">
                    <h3>Total Tasks Completed</h3>
                    <p>{totalTasks}</p>
                </div>
                <div className="stat-item">
                    <h3>Total Time Spent (Hours)</h3>
                    <p>{totalTime}</p>
                </div>
                <div className="stat-item">
                    <h3>Average Time Per Task (Hours)</h3>
                    <p>{avgTimePerTask.toFixed(2)}</p>
                </div>
                <div className="stat-item">
                    <h3>Max Tasks Completed in a Day</h3>
                    <p>{maxTasks}</p>
                </div>
                <div className="stat-item">
                    <h3>Min Tasks Completed in a Day</h3>
                    <p>{minTasks}</p>
                </div>
                <div className="stat-item">
                    <h3>Max Time Spent in a Day (Hours)</h3>
                    <p>{maxTime}</p>
                </div>
                <div className="stat-item">
                    <h3>Min Time Spent in a Day (Hours)</h3>
                    <p>{minTime}</p>
                </div>
            </div>

            {/* Display charts */}
            <div className="chart-container">
                <h2>Tasks Completed Over the Week</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="TasksCompleted" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            <div className="chart-container">
                <h2>Time Spent on Tasks (Hours)</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="TimeSpent" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ProductivityStats;
