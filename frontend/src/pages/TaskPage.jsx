import React, { useState, useEffect } from 'react';
import TaskList from '../components/TaskList';
import ProgressBar from '../components/ProgressBar';
import { getTasks, updateTaskStatus } from '../api/taskApi';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };
    fetchTasks();
  }, []);

  const handleUpdateStatus = async (id) => {
    const task = tasks.find((task) => task._id === id);
    const updatedTask = {
      ...task,
      status: task.status === 'Pending' ? 'Completed' : 'Pending',
    };
    await updateTaskStatus(id, updatedTask);
    setTasks(
      tasks.map((t) => (t._id === id ? { ...t, status: updatedTask.status } : t))
    );
  };

  const completedTasks = tasks.filter((task) => task.status === 'Completed')
    .length;

  return (
    <div>
      <h1>Task Tracker</h1>
      <ProgressBar completed={completedTasks} total={tasks.length} />
      <TaskList tasks={tasks} onUpdateStatus={handleUpdateStatus} />
    </div>
  );
};

export default TaskPage;
