import React from "react";
import styles from "./EventList.module.css";

export default function EventList({events, deleteEvent}) {
  return (
    <div>
      {events.map((event)=>{
      return (
        <div className={styles.card} key={event.id}>
          <h2> {event.id} {event.title}</h2>
          <p>{event.location} - {event.date}</p>
          <button onClick={()=>deleteEvent(event.id)}>Delete Event</button>
        </div>
      )
    })}
    </div>
  )
}
