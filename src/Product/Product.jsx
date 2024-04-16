import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../Header/Header'
import { Footer } from '../Footer/Footer'
import  CoffeeBeanBig  from '/src/assets/coffee-bean-big.png'

export const Product = () => {
  return (
    <>
      <Header />
      <main className="main">
<div className="product">
    <span className="icon-chevron-left"></span>
    <img src={ CoffeeBeanBig } alt="dasdasdsa"/>
    <div className="coffeeDesc">
        <div className="coffeeName">
            <p>Robusta Beans</p>
            <span className="coffeeNameLocation">From Africa</span>
            <div className="rating">
                <img src="assets/star-svg.svg" alt="star"/>
                <span className="ratingNumber">4.5</span>
                <span classna="ratingVote">(6,879)</span>
            </div>
        </div>
        <div className="coffeeType">
            <div className="iReallyNeedSoMuchDivsToCreateThisPage">
                <div className="bean">
                    <img src="assets/been.svg" alt="ewe"/>
                    Bean
                </div>
                <div className="location">
                    <img src="assets/location.svg" alt="ewe"/>
                    Africa
                </div>
            </div>
            <div className="roasted">
                Medium Roasted
            </div>
        </div>
    </div>
</div>
<div className="bottomSection">
    <div className="description"> Description <br/> <br/>
        <p>Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! </p>
    </div>
    <div className="sizeTitle">Size</div> 
    <div className="size">
        <a className="sizegm" href="#">250gm</a>
        <a className="sizegm" href="#">500gm</a>
        <a className="sizegm" href="#">1000gm</a>
    </div>
    <div className="price">
        <div className="priceBlock">
            Price 
            <p>$ <span>10.50</span></p>
        </div>
        <button>Add to Cart</button>
    </div>
</div>
</main>
      <Footer />
    </>
  )
}
