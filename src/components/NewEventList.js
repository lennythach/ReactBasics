import "./NewEventList.css";
import {useState} from 'react'

export default function NewEventList({addEvent}) {
  const [newTitle, setNewTitle] = useState('')
  const [newDate, setNewDate] = useState('')
  const resetForm = () => {
    setNewTitle('')
    setNewDate('')
  }

  const submitEvent = (e) => {
    e.preventDefault()
    const events = {
      title:newTitle,
      date:newDate,
      id:Math.floor(Math.random() * 10000)
    }

    addEvent(events);
    resetForm();
  }
  return (
    <form className="new-event-form" onSubmit={submitEvent}>
        <label>
            <span>Event Title:</span>
            <input 
              type={"text"} 
              onChange={(e)=>setNewTitle(e.target.value)}
              value={newTitle}
              ></input>
        </label>
        <label>
            <span>Event Date:</span>
            <input 
              type={"date"} 
              onChange={(e)=>setNewDate(e.target.value)}
              value={newDate}
            ></input>
        </label>
        <button>Submit</button>
        <p><b>Title: </b>{newTitle},<b> Date: </b>{newDate}</p>
    </form>
  )
}

