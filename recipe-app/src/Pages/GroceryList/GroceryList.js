import React, { Component } from "react";
import SpoonacularApi from '../../spoonacular';
import {diets} from '../Profile/ProfileDiet'
import {intolerances} from '../Profile/ProfileIntolerances'
import {cuisines} from '../Profile/ProfileCuisine'
import womanCooking from '../StockImages/womanCooking.jpeg'

class GroceryList extends Component{



render(){  
  return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    }}
  >
    
    <h1>Placeholder</h1>
  </div>
);}

}

export default GroceryList;

