import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Widgets.css';
import Topbar from './Topbar';

const Widgets = () => {
    const [date, setDate] = useState(new Date());
    const [tasks, setTasks] = useState([]);
    const [selectedPriority, setSelectedPriority] = useState('All');

    const addTask = (taskText, taskDeadline, taskPriority) => {
        const newTask = { 
            id: Date.now(), 
            text: taskText, 
            deadline: taskDeadline || 'No Deadline', 
            priority: taskPriority || 'Medium',
            completed: false 
        };
        
        const updatedTasks = [...tasks, newTask];
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const toggleTaskCompletion = (taskId) => {
        const updatedTasks = tasks.map(task => 
            task.id === taskId ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    const deleteTask = (taskId) => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    };

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
        setTasks(storedTasks);
    }, []);

    const filteredTasks = selectedPriority === 'All' 
        ? tasks 
        : tasks.filter(task => task.priority === selectedPriority);

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
                    
                    <div>
                        <label>Filter by Priority: </label>
                        <select onChange={(e) => setSelectedPriority(e.target.value)} value={selectedPriority}>
                            <option value="All">All</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                    </div>

                    <ul className="task-list">
                        {filteredTasks.map((task) => (
                            <li key={task.id} className={task.completed ? "completed" : ""}>
                                <span onClick={() => toggleTaskCompletion(task.id)}>
                                    {task.completed ? "✅" : "⬜"} {task.text} ({task.priority})
                                </span>
                                <div>
                                    <span className="task-deadline">Deadline: {task.deadline}</span>
                                    <button className="delete-btn" onClick={() => deleteTask(task.id)}>❌</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white p-4 rounded-xl shadow">
                    <h2 className="text-xl font-bold mb-4">⏳ My Tracking</h2>
                    <p>Total Tasks: {tasks.length}</p>
                    <p>Completed Tasks: {tasks.filter(task => task.completed).length}</p>
                    <p>Pending Tasks: {tasks.filter(task => !task.completed).length}</p>
                </div>
            </div>
        </>
    );
};

export default Widgets;
