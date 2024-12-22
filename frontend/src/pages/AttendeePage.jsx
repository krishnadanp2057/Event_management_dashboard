import React, { useState, useEffect } from 'react';
import AttendeeList from '../components/AttendeeList';
import { getAttendees, deleteAttendee } from '../api/attendeeApi';

const AttendeePage = () => {
  const [attendees, setAttendees] = useState([]);

  useEffect(() => {
    const fetchAttendees = async () => {
      const data = await getAttendees();
      setAttendees(data);
    };
    fetchAttendees();
  }, []);

  const handleDelete = async (id) => {
    await deleteAttendee(id);
    setAttendees(attendees.filter((attendee) => attendee._id !== id));
  };

  return (
    <div>
      <h1>Attendee Management</h1>
      <AttendeeList attendees={attendees} onDelete={handleDelete} />
    </div>
  );
};

export default AttendeePage;
