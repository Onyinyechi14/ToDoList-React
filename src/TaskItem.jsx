import React from 'react';

function TaskItem({ task, toggleComplete, editTask, deleteTask }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div onClick={() => toggleComplete(task.id)}>
        <h3>{task.name}</h3>
        <p>{task.description}</p>
      </div>
      <button onClick={() => editTask(task)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
