import React from 'react';

const TaskItem = ({ task, removeTask }) => {
    return (
        <div className="task-item">
            <span>{task}</span>
            <button onClick={removeTask}>X</button>
        </div>
    );
};

export default TaskItem;
