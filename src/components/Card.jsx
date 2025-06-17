import React from 'react'
import './Card.css'
import DeleteIcon from '../svgs/DeleteIcon'
// This is a simple Card component that displays a note with a title, content, and options to edit or delete the note.

const Card = ({note, getNotes}) => {
  const {note: text, id} = note; // Destructure the note object to get the text and id
  const DeleteNote = async () => {
    try {
      const response = await fetch(`https://firenote-4e821-default-rtdb.firebaseio.com/notes/${id}.json`,{
      Method: 'DELETE',
    })

    if(!response.ok){
      throw new Error('Failed to delete note');
    }
    getNotes(); // Call getNotes to refresh the list of notes after deletion
      
    } catch (error) {
      alert(`Error deleting note: ${error.message}`);
      
    }
  }
  return (
    <>
        <div className='card'>
            <h3>+ {text}</h3>
            <div onClick={DeleteNote} className='delete-icon'>
              <DeleteIcon />
            </div>
        </div>
    </>
  )
}

export default Card