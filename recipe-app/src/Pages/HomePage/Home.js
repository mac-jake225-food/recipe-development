import React, { Children } from 'react';

/**
 * the following three imports are catergorized as: CC0 LICENSE (FREE PERSONAL AND COMMERCIAL USE)
 * sourcing these are not necessary in our program 
 */
import chickPeasImg from '../StockImages/chickpeas.jpg'
import Planner from '../StockImages/planner.jpg'
import foodSkillet from '../StockImages/foodSkillet.jpg'
import "./Home.css";




/**
 * This method constructs the card stack present on the home page 
 * @returns card stack containing images/words 
 */
const Home = () => {

  return (
    <div>
    <h1 className='header__formatter'>Why Us?</h1>
    <div className="wrapper">
      <Card img={foodSkillet} title='Ready to Get Cooking?' description='First, navigate to the Profile page in the sidebar. From there, you will be able to enter your food preferences so that we can deliver only the meals that suit you. After that, choose and access recipes with the Recipe page, and schedule your meals and shopping trip with the Calendar and Grocery List pages'/>
      <Card img={chickPeasImg} title='Nutrional Layout' description='With our integrated Spoonacular API, we are able to provide each user from a custom range of unique recipes. Our meals sure to satisfy your hunger, any day of the week.'/>
      {/* <Card img={Ingredients} title='Household Ingredients' description='To ensure peak nutrition, convenience and deliciousness, we provide users with the experience to select the ingredients that they have available, presenting them with meals that they are able to make. Giving our users the most accessible recipes.'/> */}
      <Card img={Planner} title='Planner Structure' description='Inspired by accessiblity, we provide our users with the ability to schedule their desired recipes for the times and days they would like to make them. With love, we aim to provide one of the most flexible and unique user experiences.'/>
      </div>
    </div>
  );
};

/**
 * This method constructs the actual card prop containing and image / words with title 
 * @param {props} props 
 * @returns 
 */
function Card(props) {
  return (
    <div className='card'>
      <div className='card__body'>
        <img src={props.img} className='card__image'/>
        <h2 className='card__title'>{props.title}</h2>
        <p className='card__description'>{props.description}</p>
      </div>
    </div>
  )

}

export default Home;