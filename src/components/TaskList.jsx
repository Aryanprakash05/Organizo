import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, removeTask }) => {
    return (
        <div className="task-list">
            {tasks.map((task, index) => (
                <TaskItem key={index} task={task} removeTask={() => removeTask(index)} />
            ))}
        </div>
    );
};

export default TaskList;
