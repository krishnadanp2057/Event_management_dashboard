import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks';

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateTaskStatus = async (id, updatedTask) => {
  await axios.put(`${API_URL}/${id}`, updatedTask);
};

export const createTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};
