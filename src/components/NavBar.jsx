import React from 'react'
import './NavBar.css'
import DeleteIcon from '../svgs/DeleteIcon'

const NavBar = ({getNotes, totalNotes}) => {
  
 
  return (
    <section className='nav-bar'>
        <h1>Fire Note</h1>
        <button onClick={getNotes}>Get Note</button>
        <p>Total notes - <span>${totalNotes}</span></p>
        <DeleteIcon onClick={deleteNote}/>
    </section>
  )
}

export default NavBar