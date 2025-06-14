
import { useEffect, useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import Card from './components/Card'
import NavBar from './components/NavBar'

function App() {
  const [notes, setNotes] = useState([]);
  // Function to fetch notes from the server
  // and update the state

  // useEffect(() => {
  //   getNotes();
  // },[]);


  const getNotes = async () => {
    const response = await fetch('http://localhost:5000/notes');
    const notes = await response.json();
    const modifiedNotes = [];
    for(const key in notes) {
      modifiedNotes.push(notes[key])
    }
    setNotes(modifiedNotes);

  }

  return (
    <>
      <NavBar getNotes={getNotes} />
      <AddNote />
      {
       notes.map((note, index) => {
          return (
            <Card key={index} note={note} />
          )
        })
      }
    </>
  )
}

export default App
