import React from 'react';

const EventList = ({ events, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <strong>{event.name}</strong> - {event.description} <br />
            Location: {event.location}, Date: {new Date(event.date).toDateString()}
            <br />
            <button onClick={() => onEdit(event)}>Edit</button>
            <button onClick={() => onDelete(event._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
