import React, { useState } from 'react';
import EventForm from './EventForm';
import EventList from './EventList';
import NavBar from './NavBar';

function App() {
  const [events, setEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const removeEvent = (index) => {
    const newEvents = events.filter((_, i) => i !== index);
    setEvents(newEvents);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <EventList events={events} removeEvent={removeEvent} />;
      case 'add':
        return <EventForm addEvent={addEvent} />;
      default:
        return <EventList events={events} />;
    }
  };

  return (
    <div className="App">
      <header>
        <h1>StreamList</h1>
      </header>
      <NavBar setCurrentPage={setCurrentPage} />
      {renderPage()}
    </div>
  );
}

export default App;
