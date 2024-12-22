import React from 'react';

const AttendeeList = ({ attendees, onDelete }) => {
  return (
    <div>
      <h2>Attendees</h2>
      <ul>
        {attendees.map((attendee) => (
          <li key={attendee._id}>
            {attendee.name} ({attendee.email})
            <button onClick={() => onDelete(attendee._id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AttendeeList;
