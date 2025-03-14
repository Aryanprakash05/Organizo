import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Widgets.css';
import Topbar from './Topbar';

const Widgets = () => {
    const [date, setDate] = useState(new Date());
    const [tasks, setTasks] = useState([]);

    // Function to add a task
    const addTask = (taskText) => {
        const newTask = { 
            id: Date.now(), 
            text: taskText, 
            completed: false 
        };
        
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Function to toggle task completion
    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Function to delete a task
    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    // Load tasks from localStorage on component mount
    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks"));
        if (storedTasks) setTasks(storedTasks);
    }, []);

    return (
        <>
            <Topbar addTask={addTask} />  {/* Passing addTask function to Topbar */}
            <div className="grid">
                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">📅 Calendar</h2>
                    <Calendar 
                        onChange={setDate} 
                        value={date} 
                        className="react-calendar"
                    />
                    <p className="selected-date">Selected Date: {date.toDateString()}</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow tasks-container">
                    <h2 className="text-xl font-bold mb-4">📝 My Tasks</h2>
                    
                    {/* Display Tasks */}
                    <ul className="task-list">
                        {tasks.map((task) => (
                            <li key={task.id} className={task.completed ? "completed" : ""}>
                                <span onClick={() => toggleTaskCompletion(task.id)}>
                                    {task.completed ? "✅" : "⬜"} {task.text}
                                </span>
                                <button onClick={() => deleteTask(task.id)}>❌</button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">📂 My Categories</h2>
                    <p>Categories Management (To be implemented)</p>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">⏳ My Tracking</h2>
                    <p>Tracking Progress (To be implemented)</p>
                </div>
            </div>
        </>
    );
};

export default Widgets;
