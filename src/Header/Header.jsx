import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HeaderMenu } from './Components/HeaderMenu/HeaderMenu'

export const Header = () => {
  const [navIsActive, setNavIsActive] = useState(false)
  return (
    <>
    <header>
      <div className="menu" onClick={() => setNavIsActive(true)}   >

   <span className="icon-menu"></span>
</div>
<div className="user">
  <span className="icon-coffee"></span>
</div>

    </header>
    {navIsActive && <HeaderMenu navIsActive={navIsActive} navClose={() => setNavIsActive(false)} />}
  </>
  )
}
