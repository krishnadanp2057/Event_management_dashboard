import axios from 'axios';

const API_URL = 'http://localhost:5000/api/attendees';

export const getAttendees = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const deleteAttendee = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const createAttendee = async (attendee) => {
  const response = await axios.post(API_URL, attendee);
  return response.data;
};
