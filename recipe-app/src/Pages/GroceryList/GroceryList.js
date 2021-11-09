import React, { Component } from "react";
import SpoonacularApi from '../../spoonacular';
import {diets} from '../Profile/ProfileDiet'
import {intolerances} from '../Profile/ProfileIntolerances'
import {cuisines} from '../Profile/ProfileCuisine'
import womanCooking from '../StockImages/womanCooking.jpeg'
import { savedRecipes } from "../RecipesPage/Recipes";

import { Link } from "react-router-dom";

var id = 1003464
// var id = savedRecipes[0]
var ingredientInfo;


console.log("-----------------------> running API query");
// var id=savedRecipes[0]
var api = new SpoonacularApi.RecipesApi()
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ', data);
  }
};

api.getRecipeIngredientsByID(id, callback)

class GroceryList extends Component{

    getRecipeIngredientsByID = () => {
      console.log("inside method")
      var api = new SpoonacularApi.RecipesApi()
      var callback = function(error, data, response) {
      if (error) {
        console.error(error);
      } 
      else {
        console.log('ingredient api called successfully. Returned data: ', data.results);
        ingredientInfo = data
      }
    };
    api.getRecipeIngredientsByID(id, callback);
    console.log(" function called")
    }

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
  <div>
      {this.getRecipeIngredientsByID}
      {console.log('can print')}
  </div>
      {/* < Link to='/Recipes'> */}
        <button type="button" 
        className="profile-buttons" 
        onClick={this.searchRecipes}>
        Finish Profile
      </button>
      {/* </Link> */}
  </div>
);}
}
export default GroceryList;

