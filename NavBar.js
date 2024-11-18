import React from 'react';

function NavBar({ setCurrentPage }) {
  return (
    <nav>
      <button onClick={() => setCurrentPage('home')}>Home</button>
      <button onClick={() => setCurrentPage('add')}>Add Event</button>
    </nav>
  );
}

export default NavBar;
