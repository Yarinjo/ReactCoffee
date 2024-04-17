import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className='footer'>
      <Link className='footerLinks' to={'/'}><span class="sidebar-link__icon icon-home"></span> </Link>
      <Link className='footerLinks' to={'/notification'}><span class="sidebar-link__icon icon-bell"></span></Link>
      <Link className='footerLinks' to={'/favourites'}><span class="sidebar-link__icon icon-heart"></span></Link>
      <Link className='footerLinks' to={'/cart'}><span class="sidebar-link__icon icon-cart"></span></Link>
    </footer>
  )
}
