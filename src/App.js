// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  let [name, setName] = useState('Meiling');

  let [events, setEvents] = useState([
    {event:'Hello, This is my first react webapp!', id:1},
    {event:'This will be the start of my success!', id:2},
    {event:'I cannot wait to see what will happens next!', id:3}
  ])

  const changeName = () => setName('Lenny');

  const deleteEvent = (id) => {
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id !== event.id
      })
    })
  }


  return (
  <div className='App'>
    <h1>My name is {name}</h1>
    <button onClick={changeName}>Change name</button>

    {events.map((event)=>{
      return (
        <div>
          <h2>{event.event}</h2>
          <button onClick={()=>deleteEvent(event.id)}>Delete Event</button>
        </div>
      )
    })}

  </div>
  )
};

export default App;
