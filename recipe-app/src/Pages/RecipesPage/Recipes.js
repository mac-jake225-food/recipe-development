import React, { Component } from "react";
import SpoonacularApi from '../../spoonacular';
import {diets} from '../Profile/ProfileDiet'
import {intolerances} from '../Profile/ProfileIntolerances'
import {cuisines} from '../Profile/ProfileCuisine'

class Recipes extends Component{

recipeSearch = ()=>{
  var api = new SpoonacularApi.RecipesApi()
  var opts = {
    'diet' : diets.toString(),
    'intolerances' : intolerances.toString(),
    'cuisine' : cuisines.toString()
  };

  var recipeId = null;
  var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      // console.log('API called successfully. Returned data: ', data);
      var recipe1= data.results[1]
      var title = data.results[1].title
      // console.log("first recipe title: ", data.results[1].title)
      // console.log("second recipe title: ", data.results[2].title)  
      console.log("data: ", data)
      recipeId = data.results[1].id
      // return recipeId
      console.log("printing recipe id,", recipeId)
      return recipeId
    }
  };



  var filteredRecipes = api.searchRecipes(opts, callback)
  console.log("printing callback", callback)
  console.log("filteredRecipes", filteredRecipes)
  console.log("testing: ", filteredRecipes.xhr)

}


render(){  
  return (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh',
      flexDirection : 'column'
    }}
  >
    <button 
    type="button"
    onClick={this.recipeSearch}>
      Generate Recipes
    </button>
    <h1>Recipe</h1>

    <div>This is some text in a div element.</div>
    
  </div>
);}

}

export default Recipes;