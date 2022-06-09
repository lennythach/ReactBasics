// import logo from './logo.svg';
import './App.css';
import  { useState }  from 'react'
function App() {

  let [name, setName] = useState('Lenny')

  const event = [
    {title:'We bouts to party!', id:1},
    {title:'You have poopy shoes!', id:2},
    {title:'We workout for fun!', id:3},
    {title:'This is how we do it!', id:4}
    
  ]

  const changeName = () => {
    return setName('Meiling')
  }

  return (
    
    <div className="App">
      <h1>Hello, My name is {name} </h1>

      <button onClick={changeName}>Change Name</button>

      {
        event.map((event)=>(
          <div>
            <h2>{event.id} {event.title}</h2>
          </div>
        ))
      }

    </div>
  );
}

export default App;
