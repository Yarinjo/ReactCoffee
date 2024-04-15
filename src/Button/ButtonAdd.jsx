import React from 'react'
import addPicture from '/src/assets/add.svg'

export const ButtonAdd = ({ children, onClick }) => {

  return (
    <button className='button' onClick={onClick}><img src={addPicture} alt="coffee" /></button>
  )
}
