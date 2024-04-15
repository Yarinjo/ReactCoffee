import React from 'react'
import { Link } from 'react-router-dom'
import './HeaderMenu.css'

export const HeaderMenu = ({navIsActive, navClose}) => {
  return (
    <div className={`header-menu ${navIsActive ? 'is-active' : ''}`}>
         <Link to={'/'}>Home</Link>
         <Link to={'/about'}>About</Link>
         <Link to={'/contact'}>Contact</Link>
 <span className='icon-times header-menu-close' onClick={navClose}></span>
    </div>
  )
}
