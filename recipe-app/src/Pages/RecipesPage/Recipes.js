
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
var message;

class Recipes extends Component{

  state = {
    itemsShown : generateRecipesHasBeenClicked
  };

  showItems = (bool) => {
    if (filteredRecipeData!=undefined){
      
      generateRecipesHasBeenClicked = true;
      recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
      console.log(recipePosition)
      if(filteredRecipeData[recipePosition]!=undefined){
        recipeID = filteredRecipeData[recipePosition].id
        console.log(recipeID)
        this.getRecipeLink()
        console.log(recipeLink)
      }
    }
    if (filteredRecipeData!=undefined){
      if(filteredRecipeData.length!=0){
        this.setState({
          itemsShown : bool
        });
        console.log("showItems")
      }
      else{
        message = "We could not find any recipes that match your filters. Try filling out the profile page again with different filters."
      }
    }
  }

  showItemsAndSave = (bool) => {
    if (filteredRecipeData!=undefined && generateRecipesHasBeenClicked){
      savedRecipes.push(filteredRecipeData[recipePosition])
      console.log(savedRecipes)
      recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
      console.log(recipePosition)

      if(filteredRecipeData[recipePosition]!=undefined){
        recipeID = filteredRecipeData[recipePosition].id
        console.log(recipeID)
        this.getRecipeLink()
        console.log(recipeLink)
        this.generateSavedRecipeText()
      }
    }
    if (filteredRecipeData!=undefined){
      if(filteredRecipeData.length!=0){
        this.setState({
          itemsShown : bool
        });
        console.log("showItems")
      }
    }
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

  makeButton(link, recipe) {
    return (
        <button 
            style={{
              display: 'flex', 
              justifyContent: 'center', 
              alignItems:'center', 
              height:'5vh'
            }}
            onClick={() => window.open(link, "_blank")}> 
            {recipe}
        </button>
    );
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
          {typeof filteredRecipeData!='undefined' && this.makeButton(recipeLink,filteredRecipeData[recipePosition].title)}
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

          {/* <button
            type="button"
            className="recipe-buttons"
            onClick={this.resetSavedRecipes.bind(null, true)}>
            Clear Saved Recipes */}
            {/**does not take the previously saved recipes off the screen, just clears the array */}
          {/* </button> */}
        </div>
        <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {typeof filteredRecipeData!='undefined' && generateRecipesHasBeenClicked && "Saved Recipes: " + savedRecipesText}
          {typeof filteredRecipeData!= 'undefined' && typeof filteredRecipeData[0]==undefined && console.log("command works")}
        </div>

        <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {typeof filteredRecipeData!='undefined' && 'Click on the image to navigate to the recipe!'}
         {typeof filteredRecipeData=='undefined' && 'Instructions: fill out the profile page first to get your customized recipes,then select your favorites using the buttons above. '} 
         {/* {typeof filteredRecipeData=='undefined' && "\n If no recipe appears when you press the new recipe button, and you've already filled out the profile, we could not find any recipes that match your filters. Try filling out the profile page again with different filters."} */}
          {console.log("is recipe list defined? ", typeof filteredRecipeData)}
        </div>

      </div>
    );
  }
}

export {Recipes, savedRecipes};