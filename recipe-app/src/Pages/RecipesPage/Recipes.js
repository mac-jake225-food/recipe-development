
import React, { Component } from "react";
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import SpoonacularApi from "../../spoonacular";
import { Link } from "react-router-dom";
import Checkbox from "../Profile/Checkbox";
import { INITIAL_EVENTS } from "../CalendarPage/event-utils";

var generateRecipesHasBeenClicked = false;
var savedRecipes = [];
var recipePosition;
var recipeID;
var recipeLink;
var savedRecipesText = "";

class Recipes extends Component{

  state = {
    itemsShown : generateRecipesHasBeenClicked
  };

  showItems = (bool) => {
    if (filteredRecipeData!=undefined){
      generateRecipesHasBeenClicked = true;
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
    if (filteredRecipeData!=undefined && generateRecipesHasBeenClicked){
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

  resetSavedRecipes = (bool) => {
    savedRecipes.length=0
    this.setState({
      itemsShown : bool
    });
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
    if (generateRecipesHasBeenClicked){
      savedRecipesText = ""
      savedRecipesText = savedRecipes[0].title.toString()
      for (let i=1; i<savedRecipes.length; i++) {
        savedRecipesText = savedRecipesText + ", " + savedRecipes[i].title.toString()
      }
    }
  }

  render() {
    // Emilano will revist this code and update saved recipes 
    // savedRecipes = INITIAL_EVENTS
    // console.log(savedRecipes)
    return (
      <div className='recipe-items'>
        <div
          style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'40vh'
        }}>
          {this.state.itemsShown && generateRecipesHasBeenClicked && typeof filteredRecipeData!='undefined' && <img 
          src = {filteredRecipeData[recipePosition].image.toString()}
          onClick = {() => window.open(recipeLink, "_blank")}></img>}
        </div> 
        <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {this.state.itemsShown && generateRecipesHasBeenClicked && typeof filteredRecipeData!='undefined' && filteredRecipeData[recipePosition].title}
        </div>
        <div className="recipe-buttons"
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          <button
            type="button"
            className="recipe-buttons"
            onClick={this.showItems.bind(null, true)}>
            New Recipe
          </button>
          <button
            type="button"
            className="recipe-buttons"
            onClick={this.showItemsAndSave.bind(null, true)}>
            Save Recipe
          </button>
          <button
            type="button"
            className="recipe-buttons"
            onClick={this.resetSavedRecipes.bind(null, true)}>
            Clear Saved Recipes
            {/**does not take the previously saved recipes of the screen, just deletes the array */}
          </button>
        </div>
        <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {typeof filteredRecipeData!='undefined' && generateRecipesHasBeenClicked && "Saved Recipes: " + savedRecipesText}
        </div>

        <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {typeof filteredRecipeData!='undefined' && 'Click on the image to navigate to the recipe!'}
         {typeof filteredRecipeData=='undefined' && 'Instructions: fill out the profile page first to get your customized recipes,then select your favorites using the buttons above'} 
        </div>

      </div>
    );
  }
}

export {Recipes, savedRecipes};