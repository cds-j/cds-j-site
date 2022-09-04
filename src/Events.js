import React from 'react';

const list_of_events = [
    {
        artist: "Roy Haes", title: "Songbook for Black Constellations", date: "05 November 2022", startTime: 1800, endTime: 2200, location: "1109 Providence St, Houston, TX 77002"
    }
]

function Event(props) {
    const listItems = list_of_events.map(event => {
        return <li>{event.artist}, "{event.title}"<br/>{event.date} • {event.startTime} - {event.endTime}<br/>{event.location}</li>
    });
    return <ul>{listItems}</ul>
}

export default function Events() {
    return (
        <div id="events">
            <h3>events + exhibitions</h3>
            <Event />
        </div>
    )
}