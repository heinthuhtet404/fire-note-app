import React from 'react'
import './Card.css'
// This is a simple Card component that displays a note with a title, content, and options to edit or delete the note.

const Card = ({note}) => {
  return (
    <>
        <div className='card'>
            <h3>+ {note}</h3>
        </div>
    </>
  )
}

export default Card