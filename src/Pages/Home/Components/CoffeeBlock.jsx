import React from 'react'
import  CoffeePicture from '/src/assets/coffee-clear1.png'
import { coffeeInfo } from '../../../data/coffeeList'
import { ButtonAdd } from '../../../Button/ButtonAdd'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../../Product/Product'


export const CoffeeBlock = (props) => {
    console.log(props)

    const [totalPrice, setTotalPrice] = useState(0);
  
    const [add, setAdd] = useState(0);
   
    // let totalPrice = 0;
    // totalPrice = totalPrice + add

   function handleClick(type) {
    console.log('Button clicked', type, {add});
    setAdd(add + 1);
    setTotalPrice(totalPrice + props.price)
   }

  return (
    <>
      <div className='CoffeeBlock'>
      <Link to={props.link}>
        
          <img src={props.picture} alt="Coffee" />
        {/* <img class="starBlock" src="assets/star.png" alt="asdas">
        <img class="star" src="assets/star-svg.svg" alt="asdas"> */}
        <p className="CoffeeBlockTitle">{props.title}</p>
        {/* <span className="rate">4.5</span> */}
        <span className="CoffeeBlockDesc">{props.description}</span>
        </Link>
        <div className="picturesBlockLowerSection">
          <p className="price">$ <span>{props.price}</span></p>
      <ButtonAdd onClick={() => handleClick('SSS')}>Add</ButtonAdd>
      </div>
      <p>{ add } </p>
      <p className='totalPrice'>{ totalPrice } </p>
      </div>
      
    </>
  )
}
