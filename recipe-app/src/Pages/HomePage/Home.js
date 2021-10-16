import React from 'react';
import chickPeasImg from '../StockImages/chickpeas.jpg'
import Ingredients from '../StockImages/Ingredients.jpg'
import "./Home.css";


const Home = () => {

  return (
    <div className="HomePageFormatting">
      <h1 className="introText">Why Us?</h1>
      <div>
        <div className="stockPhotos">
          <img className="chickPeas" src={chickPeasImg}></img>
          <img className="ingredients" src={Ingredients}></img>
        </div>

      </div>
      <div class="text-center-card__content">
        <div class="card__content-inner">                     
          <h4 class="nutritonalHeading">NUTRITIONAL LAYOUT</h4>                      
          <p class="p2-card__description">Our meals and products are backed by cutting-edge nutrition science and traditional healing wisdom to give your body what it needs to thrive.</p>
        </div>
      </div>
      
    </div>


  );
};

export default Home;