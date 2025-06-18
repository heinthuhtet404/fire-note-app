import React, { useState } from 'react'
import './AddNote.css'

const AddNote = ({getNotes}) => {
  const [note, setNote] = useState('');

  // Function to handle adding a note
  const addNote = async (e) => {
    if(note.trim() === '') {
      alert('Please enter a note');
      return; // Stop the function if note is empty
    }

    e.preventDefault(); // Prevent the default form submission behavior

    try {
      await fetch('https://firenote-4e821-default-rtdb.firebaseio.com/notes.json', { // Firebase Realtime Database URL
        method: 'POST', // Use POST to add a new note
        body: JSON.stringify(note), // Convert note to JSON string
        headers: {
          'Content-Type': 'application/json' // Set the content type to JSON
        }
      });

      setNote(''); // Clear the input field after adding the note
      
      getNotes(); // Refresh the notes after adding a new one
    } catch (error) {
      alert(`Error adding note: ${error.message}`);
    }
  }

  return ( 
    <section>
      <form action="" onSubmit={addNote}> 
        <input type="text" placeholder='Add note here' onChange={(e) => {
          setNote(e.target.value)
        }} />
        <button className='submit-btn'>Add Note</button>
      </form>
    </section>
  )
}

export default AddNote 