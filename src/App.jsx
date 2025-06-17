import { useEffect, useState } from 'react'
import './App.css'
import AddNote from './components/AddNote'
import Card from './components/Card'
import NavBar from './components/NavBar'

function App() {
  const [notes, setNotes] = useState([]); // This state will hold the notes fetched from the database
  const [loading, setLoading] = useState(true); // This state can be used to show a loading spinner or message
  const [error, setError] = useState(null); // This state can be used to handle errors

  // useEffect(() => {
  //   getNotes();
  // },[]);


  const getNotes = async () => {
    setLoading(true); // Set loading to true before fetching notes

    try {
      const response = await fetch('https://firenote-4e821-default-rtdb.firebaseio.com/notes.json');
      if (!response.ok) {
        throw new Error('cannot connect to Firebase'); // Throw an error if the response is not ok
      }
      const notes = await response.json();
      const modifiedNotes = [];
      for (const key in notes) {
        modifiedNotes.push({
          id: key,
          note: notes[key],

        });
      }
      setNotes(modifiedNotes); // Update the notes state with the fetched notes
      setError(null); // Reset error state if notes are fetched successfully

    } catch (error) {
      alert(`Error fetching notes: ${error.message}`);
      setError(error); // Set the error state if there is an error
    }
    setLoading(false); // Set loading to false after fetching notes

  }


  return (
    <>
      <NavBar getNotes={getNotes} totalNotes={notes.length} /> 
      <AddNote getNotes={getNotes} />
      {loading && !error && <h1 className='loading'>Loading...</h1>}  {/* Show loading message while fetching notes */}
      {error && !loading && <h1 className='error'>Error fetching notes</h1>} {/* Show error message if there is an error */}
      {
        notes.length === 0 && !loading && !error ? (
          <h1 className='no-notes'>No notes available</h1>
        ) : null
      } 

      {
        !loading && !error && notes.length > 0 ? ( // Check if notes are loaded and there are notes to display
          <div className='card-container'>
            {notes.map((note, index) => (
              <Card key={index} note={note} getNotes={getNotes} />

            ))}
          </div>
        ) : (
          <h1 className='no-notes'>No notes available</h1> // Show message if there are no notes
        )
      }
    </>
  )
}

export default App
