import React from 'react'
import { CoffeeBlock } from './CoffeeBlock'
import { coffeeInfo } from '../../../data/coffeeList'
import { coffeeBeanInfo } from '../../../data/coffeeBeans'

export const BeansList = () => {
  return (
    <div className='CoffeeList'>
        <CoffeeBlock title={coffeeBeanInfo[0].title} description={coffeeBeanInfo[0].description} price={coffeeBeanInfo[0].price} link={coffeeBeanInfo[0].link}/>
        <CoffeeBlock title={coffeeBeanInfo[1].title} description={coffeeBeanInfo[1].description} price={coffeeBeanInfo[1].price} link={coffeeBeanInfo[1].link}/>
        <CoffeeBlock title={coffeeBeanInfo[2].title} description={coffeeBeanInfo[2].description} price={coffeeBeanInfo[2].price} link={coffeeBeanInfo[2].link}/>
    </div>
  )
}
