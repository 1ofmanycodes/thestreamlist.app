import React, { useState } from 'react';

function EventForm({ addEvent }) {
  const [event, setEvent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event) {
      addEvent(event);
      setEvent(''); // Clear the input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={event}
        onChange={(e) => setEvent(e.target.value)}
        placeholder="Add your event"
      />
      <button type="submit">Add Event</button>
    </form>
  );
}

export default EventForm;
