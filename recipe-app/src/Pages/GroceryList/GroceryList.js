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

  state = {
    listFilled : false
  };

  changeListFilled = (bool) => {
    this.setState({
      listFilled : bool
    });
  }
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
            for(var i=0; i<data.ingredients.length; i++){
              var recipeName = data.ingredients[i].name
              ingredientList.push(recipeName)
            }
          }
          // console.log('all ingredients: ', ingredientList.toString())

        };
        api.getRecipeIngredientsByID(id, callback)
        this.changeListFilled.bind(null, true)
      }
    }
  }

  getIngredientNames = () => {
    console.log("function runs")
    console.log('all ingredients: ', ingredientList.toString())

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
      {/* {this.getIngredientNames()} */}
      
      {this.getRecipeIngredients()}
      {console.log('list filled? ', this.state.listFilled)}
      {this.state.listFilled && this.getIngredientNames() && 'works'}
      {console.log('can print')}
  </div>
      {/* {this.getIngredientNames()} */}
      {/* {typeof savedRecipes[0]!='undefined' && 'test' + ingredientList.toString() } */}
  </div>
);}
}
export default GroceryList;

