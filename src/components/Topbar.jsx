import React, { useState } from 'react';
import './Topbar.css';

const Topbar = ({ addTask }) => {
    const [taskInput, setTaskInput] = useState('');

    const handleAddTask = () => {
        if (taskInput.trim()) {
            addTask(taskInput);
            setTaskInput('');
        }
    };

    return (
        <div className="topbar">
            
            <input 
                type="text" 
                className="taskInput" 
                placeholder="Add a new task..." 
                value={taskInput} 
                onChange={(e) => setTaskInput(e.target.value)} 
            />
            <button className="newTaskButton" onClick={handleAddTask}>+ Add Task</button>
        </div>
    );
};

export default Topbar;
