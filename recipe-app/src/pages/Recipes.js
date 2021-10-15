import React, { Component } from "react";
import SpoonacularApi from '../spoonacular';
import {diets} from './Profile/ProfileDiet'
import {intolerances} from './Profile/ProfileIntolerances'
import {cuisines} from './Profile/ProfileCuisine'

class Recipes extends Component{

searchRecipes = () =>{
  var api = new SpoonacularApi.RecipesApi()
  var opts = {
    'diet' : diets.toString(),
    'intolerances' : intolerances.toString(),
    'cuisine' : cuisines.toString()
  };

  var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log('API called successfully. Returned data: ', data);
    }
  };
  var filteredRecipes = api.searchRecipes(opts, callback)
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
    <button 
    type="button"
    onClick={this.searchRecipes}>
      Generate Recipes
    </button>
    <h1>Recipe</h1>
  </div>
);}

}

export default Recipes;