import React, { useState, useEffect } from 'react';
import EventList from '../components/EventList';
import { getEvents, createEvent, deleteEvent } from '../api/eventApi';

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const data = await getEvents();
      setEvents(data);
    };
    fetchEvents();
  }, []);

  const handleDelete = async (id) => {
    await deleteEvent(id);
    setEvents(events.filter((event) => event._id !== id));
  };

  return (
    <div>
      <h1>Event Management</h1>
      <EventList events={events} onDelete={handleDelete} />
    </div>
  );
};

export default EventPage;
