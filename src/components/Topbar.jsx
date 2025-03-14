import React, { useState } from 'react';
import './Topbar.css';

const Topbar = ({ addTask }) => {
    const [taskText, setTaskText] = useState('');
    const [taskDeadline, setTaskDeadline] = useState('');
    const [taskPriority, setTaskPriority] = useState('Medium');
    const [darkMode, setDarkMode] = useState(false);

    const handleAddTask = () => {
        if (taskText.trim() === '') return;

        addTask(taskText, taskDeadline, taskPriority);
        setTaskText('');
        setTaskDeadline('');
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
    };

    return (
        <div className="topbar">
            <input 
                type="text" 
                className="searchBar" 
                placeholder="Enter a task..." 
                value={taskText} 
                onChange={(e) => setTaskText(e.target.value)}
            />

            <input 
                type="date" 
                className="taskDeadline" 
                value={taskDeadline} 
                onChange={(e) => setTaskDeadline(e.target.value)}
            />

            <select 
                value={taskPriority} 
                onChange={(e) => setTaskPriority(e.target.value)}
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <button className="newTaskButton" onClick={handleAddTask}>+ Add Task</button>
            
           
        </div>
    );
};

export default Topbar;
