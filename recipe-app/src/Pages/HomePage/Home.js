import React, { Children } from 'react';
import womanCooking from '../StockImages/womanCooking.jpeg'
import chickPeasImg from '../StockImages/chickpeas.jpg'
import Ingredients from '../StockImages/Ingredients.jpg'
import Planner from '../StockImages/planner.jpg'
import foodSkillet from '../StockImages/foodSkillet.jpg'
import "./Home.css";


const Home = () => {

  return (
    <div>
    <h1 className='header__formatter'>Why Us?</h1>
    <div className="wrapper">
      <Card img={foodSkillet} title='Ready to Get Cooking?' description='First, navigate to the Profile page in the sidebar. From there, you will be able to enter your food preferences so we can deliver only the meals that suit you. After that is complete, the Recipie,  Calender and Grocery List pages will accomodate your saved choices and you can plan away.'/>
      <Card img={chickPeasImg} title='Nutrional Layout' description='With our integrated Spoonacular API, We are able to provide each user from a custom range of unique Recipes. Our meals are backed by cutting-edge nutrition science to satisfy your hunger any day of the week.'/>
      <Card img={Ingredients} title='Household Ingredients' description='To ensure peak nutrition, convenience and deliciousness, we allow users with the experience to select the ingredients that they have avaiable presenting them with meals that they are able to make. Giving our users the most accessible recipes.'/>
      <Card img={Planner} title='Planner Structure' description='Inspired by accessiblity, we provide our users with the ability to bookmark their desired recipes for the times and days they would like to make them. With love, we aim yo provide one of the most flexible and unique user experiences.'/>
      </div>
    </div>
  );
};

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