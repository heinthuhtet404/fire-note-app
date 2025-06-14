import React, { useState } from 'react'
import './AddNote.css'

const AddNote = () => {
  const [note, setNote] = useState('');

  // Function to handle adding a note
  const addNote = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/notes', {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      setNote('');
    } catch (error) {
      alert('Error adding note');

      
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