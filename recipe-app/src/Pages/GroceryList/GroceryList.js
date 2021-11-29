import React, { Component } from "react";
import SpoonacularApi from '../../spoonacular';
import {diets} from '../Profile/ProfileDiet'
import {intolerances} from '../Profile/ProfileIntolerances'
import {cuisines} from '../Profile/ProfileCuisine'
import womanCooking from '../StockImages/womanCooking.jpeg'
import { savedRecipes } from "../RecipesPage/Recipes";

import { Link } from "react-router-dom";

var ingredientList= [];

class GroceryList extends Component{

  getRecipeIngredients = () => {

    if(typeof savedRecipes[0] != 'undefined'){
      var api = new SpoonacularApi.RecipesApi()
      for(let i =0; i<savedRecipes.length; i++){
        console.log("-----------------------> running API query");
        var id=savedRecipes[i].id
        var callback = function(error, data, response) {
          if (error) {
            console.error(error);
          } else {
            console.log('ingredient api called successfully. Returned data: ', data.ingredients);
            ingredientList= ingredientList.concat(data.ingredients)
          }
          console.log('all ingredients: ', ingredientList)
        };
        api.getRecipeIngredientsByID(id, callback)
        console.log('all ingredients: ', ingredientList)
      }
    }
  }

  getIngredientNames = () => {
    console.log('ingredientList', ingredientList)
    // if(typeof ingredientList[0] != undefined){
    //   console.log('ingredient name: ', ingredientList[0].name)
    // }
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
      {this.getRecipeIngredients()}
      {this.getIngredientNames}
      {console.log('can print')}
  </div>
      {typeof savedRecipes[0]!='undefined' && ingredientList.toString && 'test'}
  </div>
);}
}
export default GroceryList;

