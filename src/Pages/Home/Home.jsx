import React from 'react'
import { Header } from '../../Header/Header'
import { Label } from './Components/Label'
import { CoffeeSort } from './Components/CoffeeSort'
import { CoffeeBlock } from './Components/CoffeeBlock'
import  CoffeePicture  from '/src/assets/coffee-clear1.png'
import { CoffeeList } from './Components/CoffeeList'
import { BeansList } from './Components/BeansList'
import { Footer } from '../../Footer/Footer'


export const Home = () => {
  return (
    <>
    <Header />
    <main>
      <h1>Find the best coffee for you</h1>
      <Label />
      <CoffeeSort />
      <CoffeeList />
      <h2>Coffee beans</h2>
      <BeansList />
      <p>Total price: </p>
    </main>
    <Footer />
    </>
    
  )
}
