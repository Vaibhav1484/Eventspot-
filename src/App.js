// src/App.js
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailsModal';
import events from './events';
import './App.css';

const App = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredEvents = events.filter(event =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="App">
            <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <div className="event-list">
                {filteredEvents.map(event => (
                    <EventCard key={event.id} event={event} onClick={() => setSelectedEvent(event)} />
                ))}
            </div>
            <EventDetailsModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
        </div>
    );
};

export default App;
