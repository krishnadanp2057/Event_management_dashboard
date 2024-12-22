import React from 'react';

const TaskList = ({ tasks, onUpdateStatus }) => {
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            {task.name} - Due: {new Date(task.deadline).toDateString()} <br />
            Assigned to: {task.assignedAttendee?.name || 'Unassigned'} <br />
            Status: {task.status}{' '}
            <button onClick={() => onUpdateStatus(task._id)}>
              {task.status === 'Pending' ? 'Mark as Completed' : 'Reopen'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
