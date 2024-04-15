import React from 'react'
import { Link } from 'react-router-dom'

export const CoffeeSort = () => {
  return (
    <li className="cofeeSort">
        <ul><Link>All</Link></ul>
        <ul><Link>Cappuccino</Link></ul>
        <ul><Link>Espresso</Link></ul>
        <ul><Link>Americano</Link></ul>
        <ul><Link>Macchiato</Link></ul>
   </li> 
  )
}
