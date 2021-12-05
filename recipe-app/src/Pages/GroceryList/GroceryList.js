import React, { Component } from "react";
import SpoonacularApi from '../../spoonacular';
import {diets} from '../Profile/ProfileDiet'
import {intolerances} from '../Profile/ProfileIntolerances'
import {cuisines} from '../Profile/ProfileCuisine'
import womanCooking from '../StockImages/womanCooking.jpeg'
import { savedRecipes } from "../RecipesPage/Recipes";
import { Link } from "react-router-dom";


class GroceryList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      ingredientList: []
    };
  }

  componentDidMount() {  
    this.getRecipeIngredients()
  }
  componentWillUnmount() {  

  }
  changeState=(recipeName)=>{
    this.setState(prevState => ({
      ingredientList: [...prevState.ingredientList, recipeName]
    }))
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
              var recipeName = ' '+data.ingredients[i].name 
              this.changeState(recipeName)
            }
          }
        };
        api.getRecipeIngredientsByID(id, callback.bind(this))
      }
    }
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
      {console.log('ingredient list, in render: ', this.state.ingredientList.toString())}
      
      <div>
        {this.state.ingredientList.map(txt => <p>{txt}</p>)}
    </div>
  </div>

  </div>
);}
}
export default GroceryList;

