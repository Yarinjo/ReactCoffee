import React from 'react'
import { CoffeeBlock } from './CoffeeBlock'
import { coffeeInfo } from '../../../data/coffeeList'

export const CoffeeList = (props ) => {
    console.log(props)
  return (
    <>
    <div className='CoffeeList'>
        <CoffeeBlock title={coffeeInfo[0].title} description={coffeeInfo[0].description} price={coffeeInfo[0].price}/>
        <CoffeeBlock title={coffeeInfo[1].title} description={coffeeInfo[1].description} price={coffeeInfo[1].price}/>
        <CoffeeBlock title={coffeeInfo[2].title} description={coffeeInfo[2].description} price={coffeeInfo[2].price}/>
    </div>
    </>
  )
}
