import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailsModal';
import eventsData from './data/events.json';
import './App.css';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <h1>EventSpot Lite</h1>
        <div className="event-list">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} onClick={() => handleEventClick(event)} />
          ))}
        </div>
        {isModalOpen && <EventDetailsModal event={selectedEvent} onClose={closeModal} />}
      </div>
    </Router>
  );
}

export default App;
