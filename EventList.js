import React from 'react';

function EventList({ events }) {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );
}

export default EventList;
