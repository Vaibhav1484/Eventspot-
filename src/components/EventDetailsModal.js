// src/components/EventDetailsModal.js
import React from 'react';
import './EventDetailsModal.css';

const EventDetailsModal = ({ event, onClose }) => {
    if (!event) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>&times;</button>
                <h2>{event.name}</h2>
                <img src={event.image} alt={event.name} />
                <p>{event.description}</p>
                <p>{event.date}</p>
                <p>{event.location}</p>
            </div>
        </div>
    );
};

export default EventDetailsModal;
