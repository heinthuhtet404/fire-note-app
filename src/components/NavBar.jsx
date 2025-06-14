import React from 'react'
import './NavBar.css'

const NavBar = ({getNotes}) => {
  return (
    <section className='nav-bar'>
        <h1>Fire Note</h1>
        <button onClick={getNotes}>Show Note</button>
    </section>
  )
}

export default NavBar