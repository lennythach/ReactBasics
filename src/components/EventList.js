import React from "react"

export default function EventList({events, deleteEvent}) {
  return (
    <div>
      {events.map((event)=>{
      return (
        <React.Fragment key={event.id}>
          <h2>{event.event}</h2>
          <button onClick={()=>deleteEvent(event.id)}>Delete Event</button>
        </React.Fragment>
      )
    })}
    </div>
  )
}
