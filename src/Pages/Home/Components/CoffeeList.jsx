import React from 'react'
import { CoffeeBlock } from './CoffeeBlock'
import { coffeeInfo } from '../../../data/coffeeList'
import { Link } from 'react-router-dom'

export const CoffeeList = (props ) => {
    console.log(props)
  return (
    <>
    <div className='CoffeeList'>
        <CoffeeBlock title={coffeeInfo[0].title} description={coffeeInfo[0].description} price={coffeeInfo[0].price} link={coffeeInfo[0].link}/>
        <CoffeeBlock title={coffeeInfo[1].title} description={coffeeInfo[1].description} price={coffeeInfo[1].price} link={coffeeInfo[1].link}/>
        <CoffeeBlock title={coffeeInfo[2].title} description={coffeeInfo[2].description} price={coffeeInfo[2].price} link={coffeeInfo[2].link}/>
    </div>
    </>
  )
}
