// import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import Modal from './components/Modal';
import React, {useState} from 'react';

function App() {
  //----------States----------//
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvent] = useState(true);
  let [name, setName] = useState('Meiling');

  let [events, setEvents] = useState([
    {event:'Hello, This is my first react webapp!', id:1},
    {event:'This will be the start of my success!', id:2},
    {event:'I cannot wait to see what will happens next!', id:3}
  ]);

  console.log(showModal)
  //------functions-------//
  const changeName = () => setName('Lenny');

  const handleClose = () => {
    setShowModal(false)
  };

  const deleteEvent = (id) => {
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id !== event.id
      })
    })
  };


  return (
  <div className='App'>
    {<Title title="Hello, This is Lenny's First React Webapp!" subtitle="Can't wait to continue learning!"/>}
    <h3>My name is {name}</h3>
    <div>
    <button onClick={changeName}>Change name</button>
    </div>
    <br></br>

    {!showEvents && (<div>
    <button onClick={()=>setShowEvent(true)} >Show Event</button>
    </div>
    )}

    {showEvents && (
    <div>
    <button onClick={()=>setShowEvent(false)} >Hide Event</button>
    </div>
    )}
    
    {!showModal && (
      <div>
        <button onClick={()=>setShowModal(true)} >Show Modal</button>
      </div>
    )}
    

    {showEvents && events.map((event)=>{
      return (
        <React.Fragment key={event.id}>
          <h2>{event.event}</h2>
          <button onClick={()=>deleteEvent(event.id)}>Delete Event</button>
        </React.Fragment>
      )
    })}
    
    {showModal && <Modal handleClose={()=>handleClose()}>
      <h2>20% Coupon Code</h2>
      <p>Use code thach12 at checkout!</p>
    </Modal>}
  </div>
  );
};

export default App;
