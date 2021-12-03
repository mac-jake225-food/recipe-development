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
  //Maybe move to recipesFile 
  // getRecipeIngredients()
  // getIngredientNames()
  state = {
    listFilled : false

  };

  constructor(props) {
    super(props);
    this.state = {
      listFilled : false
    };
  }

  componentDidMount() {  
    this.getRecipeIngredients()
    this.getIngredientNames()
  }
  componentWillUnmount() {  

  }

  // changeListFilled = (bool) => {
  //   this.getRecipeIngredients()
  //   this.getIngredientNames()
  //   console.log('state function works')
  //   this.setState({
  //     listFilled : bool
  //   });
  // }
  
  getRecipeIngredients = () => {
    if(typeof savedRecipes[0] != 'undefined'){
      var api = new SpoonacularApi.RecipesApi()
      for(let i =0; i<savedRecipes.length; i++){
        console.log("-----------------------> running API query");
        var id=savedRecipes[i].id
        var callback = function(error, data, response) {
          //I think this callback function is what is making the list be filled as the last step
          if (error) {
            console.error(error);
          } else {
            console.log('ingredient api called successfully. Returned data: ', data.ingredients);
            for(var i=0; i<data.ingredients.length; i++){
              var recipeName = data.ingredients[i].name
              ingredientList.push(recipeName)
            }
          }
          console.log('inside api call, all ingredients: ', ingredientList.toString())

        };
        api.getRecipeIngredientsByID(id, callback)
        // this.changeListFilled.bind(null, true)
      }
    }
  }

  getIngredientNames = () => {
    console.log("printing all ingredientList: ")
    console.log('all ingredients: ', ingredientList.toString())
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
      {/* {this.getRecipeIngredients()} */}
      {/* {this.getIngredientNames()} */}
      {console.log('list filled? ', this.state.listFilled)}
      {this.state.listFilled && ingredientList.toString() && 'works'}
      {console.log('can print')}
  </div>

  </div>
);}
}
export default GroceryList;

