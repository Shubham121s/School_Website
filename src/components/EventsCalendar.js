// src/components/EventsCalendar.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventsCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Replace with your API or static data source
    fetch('/api/events') // Assuming you have a local server endpoint
      .then(response => response.json())
      .then(data => setEvents(data));
  }, []);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Optionally, you can filter events based on the selected date here
  };

  return (
    <div className="events-calendar">
      <Calendar
        onChange={handleDateChange}
        value={date}
        className="calendar"
      />
      <div className="events-list mt-4">
        <h3 className="text-2xl font-semibold mb-2">Events on {date.toDateString()}:</h3>
        <ul>
          {events.filter(event => new Date(event.date).toDateString() === date.toDateString())
            .map(event => (
              <li key={event.id} className="p-2 border-b border-gray-300">
                <strong>{event.title}</strong><br />
                <span>{event.description}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EventsCalendar;
