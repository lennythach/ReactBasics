import "./NewEventList.css";
import {useState} from 'react'
import { isCompositeComponent } from "react-dom/test-utils";

export default function NewEventList({addEvent}) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Seattle');

  const resetForm = () => {
    setTitle('');
    setDate('');
    setLocation('Seattle');


  }

  const submitEvent = (e) => {
    e.preventDefault()

    const events = {
      title:title,
      date:date,
      location:location,
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
              onChange={(e)=>setTitle(e.target.value)}
              value={title}
              />
        </label>
        <label>
            <span>Event Date:</span>
            <input 
              type={"date"} 
              onChange={(e)=>setDate(e.target.value)}
              value={date}
            />
        </label>
        <label>
          <span>Locations</span>
          <select onChange={(e)=>setLocation(e.target.value)}>
            <option value="Seattle">Seattle</option>
            <option value="Tacoma">Tacoma</option>
            <option value="Des Moines">Des Moines</option>
          </select>
        </label>
        <button>Submit</button>
    </form>
  )
}

