import React, { Children } from 'react';
import chickPeasImg from '../StockImages/chickpeas.jpg'
import Ingredients from '../StockImages/Ingredients.jpg'
import Planner from '../StockImages/planner.jpg'
import "./Home.css";


const Home = () => {

  return (
    <div>
    <h1 className='header__formatter'>Why Us?</h1>
    <div className="wrapper">
      <Card img={chickPeasImg} title='Nutrional Layout' description='With our integrated Spoonacular API, We are able to provide each user from a custom range unique Recipes. Our meals are backed by cutting-edge nutrition science and traditional healing wisdom to satisfy your hungery any day of the week.'/>
      <Card img={Ingredients} title='Household Ingredients' description='To ensure peak nutrition, convenience and deliciousness, we allow users with the experience to select the ingredients that they have avaiable presenting them with meals that they are able to make. Giving our users the most accessible recipes.'/>
      <Card img={Planner} title='Planner Structure' description='Inspired by accessiblity, we provide our users with the ability to bookmark their desired recipes for the times and days they would like to make them. With love, we aim yo provide one of the most flexible and unique user experience.'/>
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