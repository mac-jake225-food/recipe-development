
import React, { Component } from "react";
import { filteredRecipeDataCuisine, finishedCuisine, chooseCuisineData, noRecipesCuisine } from "../Profile/ProfileCuisine";
import { filteredRecipeDataDiet, finishedDiet, chooseDietData, noRecipesDiet } from "../Profile/ProfileDiet";
import { filteredRecipeDataIntolerances, finishedIntolerances, chooseIntoleranceData, noRecipesIntolerances } from "../Profile/ProfileIntolerances";
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
var buttonList=[];
var putInstructions = false;
var filteredRecipeData;
var noRecipes;

class Recipes extends Component{

  state = {
    itemsShown : generateRecipesHasBeenClicked
  };

  showItems = (bool) => {
    if (filteredRecipeData!=undefined && filteredRecipeData.length!=0){
      putInstructions = true;
      generateRecipesHasBeenClicked = true;
      recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
      if(filteredRecipeData[recipePosition]!=undefined){
        recipeID = filteredRecipeData[recipePosition].id
        this.getRecipeLink()
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
    if (filteredRecipeData!=undefined && generateRecipesHasBeenClicked && filteredRecipeData.length!=0){
      putInstructions = true;
      savedRecipes.push(filteredRecipeData[recipePosition])

      buttonList.push(this.makeButton(recipeLink,filteredRecipeData[recipePosition].title))
      console.log("saved Buttons: ", buttonList)
      
      recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));

      if(filteredRecipeData[recipePosition]!=undefined){
        recipeID = filteredRecipeData[recipePosition].id
        this.getRecipeLink()
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
    console.log("button made")
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
  /**
   * This function iterates through our INITIAL_EVENTS array and SavedRecipes and checks to see if there is a removed element --
   * if so an empty array pushes the element onto it and then returns a new array with the removed
   * @returns savedRecipes 
   */
  removeRecipeFromArray(){
    if(INITIAL_EVENTS.length > 0){
      var emptyArray = [] 
      for( let i = 0; i< INITIAL_EVENTS.length; i++){
        for( let j = 0; j< savedRecipes.length; j++){
          if(INITIAL_EVENTS[i].title == savedRecipes[j].title){
            emptyArray.push(savedRecipes[j])
            console.log(emptyArray, " empty array ")
          }
        }
      }
      return savedRecipes = emptyArray
    }
  }
  

  render() {
    this.removeRecipeFromArray() 
    noRecipes = false;
    console.log(chooseDietData + "diet")
    console.log(chooseIntoleranceData + "intoler")
    console.log(chooseCuisineData + "cuisine")
    if (chooseDietData>chooseIntoleranceData&&chooseDietData>chooseCuisineData){
      filteredRecipeData = filteredRecipeDataDiet;
      if (noRecipesDiet){
        noRecipes = true;
      }
      console.log("diet")
    }
    else if (chooseIntoleranceData>chooseDietData&&chooseIntoleranceData>chooseCuisineData){
      filteredRecipeData = filteredRecipeDataIntolerances;
      if (noRecipesIntolerances){
        noRecipes = true;
      }
      console.log("intoler")
    }
    else {
      filteredRecipeData = filteredRecipeDataCuisine;
      if (noRecipesCuisine){
        noRecipes = true;
      }
      console.log("cuisine")
    }
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
          {(finishedCuisine||finishedDiet||finishedIntolerances) && noRecipes && <button
            type="button"
            className="recipe-buttons"
            onClick={this.showItems.bind(null, true)}>
            New Recipe
          </button>}

          {putInstructions && <button
            type="button"
            className="recipe-buttons"
            onClick={this.showItemsAndSave.bind(null, true)}>
            Save Recipe
          </button>}

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
          {/* {typeof filteredRecipeData!='undefined' && generateRecipesHasBeenClicked && "Saved Recipes: " + savedRecipesText} */}
          {typeof filteredRecipeData!= 'undefined' && typeof filteredRecipeData[0]==undefined && console.log("command works")}
        </div>

        <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {noRecipes && 'Sorry, we have no recipes that match your profile specifications.'}
          {this.state.itemsShown && (finishedCuisine||finishedIntolerances||finishedDiet) && putInstructions && 'Click on the image to navigate to the recipe!'}
          {!(finishedCuisine||finishedDiet||finishedIntolerances) && 'Instructions: fill out the profile page first to get your customized recipes.'} 
          {/* {typeof filteredRecipeData=='undefined' && "\n If no recipe appears when you press the new recipe button, and you've already filled out the profile, we could not find any recipes that match your filters. Try filling out the profile page again with different filters."} */}
          {console.log("is recipe list defined? ", typeof filteredRecipeData)}
          {/* {typeof filteredRecipeData!='undefined' && this.makeButton(recipeLink,filteredRecipeData[recipePosition].title)} */}
        </div>
        
        <div
        style = {{
          flexWrap: 'wrap',
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
            {buttonList.map((i,key)=>{
            return <div key={key}>{i}</div>;
          })}
        </div>

      </div>
    );
  }
}

export {Recipes, savedRecipes};