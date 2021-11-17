
import React, { Component } from "react";
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import SpoonacularApi from "../../spoonacular";
import { Link } from "react-router-dom";
import Checkbox from "../Profile/Checkbox";

var savedRecipes = [];
var recipePosition;
var recipeID;
var recipeLink;
var savedRecipesText = "";

class Recipes extends Component{

  state = {
    itemsShown : false
  };

  showItems = (bool) => {
    if (filteredRecipeData!=undefined){
      recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
      console.log(recipePosition)
      recipeID = filteredRecipeData[recipePosition].id
      console.log(recipeID)
      this.getRecipeLink()
      console.log(recipeLink)
    }
    this.setState({
      itemsShown : bool
    });
    console.log("showItems")
  }

  showItemsAndSave = (bool) => {
    if (filteredRecipeData!=undefined){
      savedRecipes.push(filteredRecipeData[recipePosition])
      console.log(savedRecipes)
      recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
      console.log(recipePosition)
      recipeID = filteredRecipeData[recipePosition].id
      console.log(recipeID)
      this.getRecipeLink()
      console.log(recipeLink)
      this.generateSavedRecipeText()
    }
    this.setState({
      itemsShown : bool
    });
    console.log("showItems")
  }

  getRecipeLink = () => {
    var api = new SpoonacularApi.RecipesApi()
      var opts = {
        'includeNutrition' : false
      };
      var callback = function(error, data, response) {
      if (error) {
        console.error(error);
      } 
      else {
        recipeLink = data.sourceUrl
      }
    };
    api.getRecipeInformation(recipeID, opts, callback);
  }

  generateSavedRecipeText = () => {
    savedRecipesText = ""
    savedRecipesText = savedRecipes[0].title.toString()
    for (let i=1; i<savedRecipes.length; i++) {
      savedRecipesText = savedRecipesText + ", " + savedRecipes[i].title.toString()
    }
  }

  render() {
    return (
      <div className='recipe-items'
      style = {{display: 'flex', justifyContent: 'center', alignItems:'center', height:'70vh'}}>
        <div>
          {this.state.itemsShown && typeof filteredRecipeData!='undefined' && <img 
          src = {filteredRecipeData[recipePosition].image.toString()}
          onClick = {() => window.open(recipeLink, "_blank")}></img>}
        </div> 
        <div>
          {this.state.itemsShown && typeof filteredRecipeData!='undefined' && filteredRecipeData[recipePosition].title}
        </div>
        <div className="recipe-buttons">
          <button
            type="button"
            className="recipe-buttons"
            onClick={this.showItems.bind(null, true)}>
            Generate Recipe
          </button>
          <button
            type="button"
            className="recipe-buttons"
            onClick={this.showItemsAndSave.bind(null, true)}>
            Save Recipe
          </button>
        </div>
        <div>
          {typeof filteredRecipeData!='undefined' && "Saved Recipes: " + savedRecipesText}
        </div>
      </div>
    );
  }
}

export {Recipes, savedRecipes};