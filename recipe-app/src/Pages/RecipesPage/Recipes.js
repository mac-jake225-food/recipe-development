import React, { Component } from "react";
import { filteredRecipeDataCuisine, finishedCuisine, chooseCuisineData, noRecipesCuisine } from "../Profile/ProfileCuisine";
import { filteredRecipeDataDiet, finishedDiet, chooseDietData, noRecipesDiet } from "../Profile/ProfileDiet";
import { filteredRecipeDataIntolerances, finishedIntolerances, chooseIntoleranceData, noRecipesIntolerances } from "../Profile/ProfileIntolerances";
import SpoonacularApi from "../../spoonacular";

var generateRecipesHasBeenClicked = false;
var savedRecipes = [];
var recipePosition = 0;
var recipeID;
var recipeLink;
var buttonList=[];
var putInstructions = false;
var filteredRecipeData;
var noRecipes;
var outOfRecipes;
var maxTime=0;

class Recipes extends Component{

  state = {
    itemsShown : generateRecipesHasBeenClicked
  };

  /**
   * This method handles all events after the user clicks the "New Recipe" button including updating position,
   * getting the recipe link, and updating various booleans to display and hide messages.
   * @param {true} bool 
   */
  showItems = (bool) => {
    if (filteredRecipeData!=undefined && filteredRecipeData.length!=0 && !outOfRecipes){
      recipePosition = recipePosition + 1;
      if (recipePosition==filteredRecipeData.length){
        outOfRecipes = true;
        recipePosition = recipePosition - 1;
      }
      putInstructions = true;
      generateRecipesHasBeenClicked = true;
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
      }
    }
  }

  /**
   * This method handles all events after the user clicks the "Save Recipe" button including updating position,
   * getting the recipe link, adding the recipe to saved recipes, adding the button for the saved recipe,
   * and updating various booleans to display and hide messages.
   * @param {true} bool 
   */
  showItemsAndSave = (bool) => {
    if (filteredRecipeData!=undefined && generateRecipesHasBeenClicked && filteredRecipeData.length!=0 && !outOfRecipes){
      putInstructions = true;
      savedRecipes.push(filteredRecipeData[recipePosition])
      buttonList.push(this.makeButton(recipeLink,filteredRecipeData[recipePosition].title))
      recipePosition = recipePosition + 1;
      if (recipePosition==filteredRecipeData.length){
        outOfRecipes = true;
        recipePosition = recipePosition - 1;
      }
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
      }
    }
  }

  resetSavedRecipes = (bool) => {
    savedRecipes.length=0
    this.setState({
      itemsShown : bool
    });
  }

  /**
   * This method makes an api call to get the link to the original recipe.
   */
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

  /**
   * This method handles all events and checks that need to happen when the recipe page rerenders including making sure
   * the recipe data is correct and making sure there exist recipes to give the user.
   */
  handleRecipeRerender = () => {
    noRecipes = false;
    if (chooseDietData>chooseIntoleranceData&&chooseDietData>chooseCuisineData){
      filteredRecipeData = filteredRecipeDataDiet;
      if (noRecipesDiet){
        noRecipes = true;
      }
      if (chooseDietData>maxTime){
        recipePosition=0;
        outOfRecipes = false;
        maxTime = chooseDietData;
      }
    }
    else if (chooseIntoleranceData>chooseDietData&&chooseIntoleranceData>chooseCuisineData){
      filteredRecipeData = filteredRecipeDataIntolerances;
      if (noRecipesIntolerances){
        noRecipes = true;
      }
      if (chooseIntoleranceData>maxTime){
        recipePosition=0;
        outOfRecipes = false;
        maxTime = chooseIntoleranceData;
      }
    }
    else {
      filteredRecipeData = filteredRecipeDataCuisine;
      if (noRecipesCuisine){
        noRecipes = true;
      }
      if (chooseCuisineData>maxTime){
        recipePosition=0;
        outOfRecipes = false;
        maxTime = chooseCuisineData;
      }
    }
  }

  render() {
    this.handleRecipeRerender();
    return (
      <div className='recipe-items'>
        <div
          style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'40vh'
        }}>
          {this.state.itemsShown && generateRecipesHasBeenClicked && typeof filteredRecipeData!='undefined' && !outOfRecipes && <img 
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
          {this.state.itemsShown && generateRecipesHasBeenClicked && typeof filteredRecipeData!='undefined' && !outOfRecipes && filteredRecipeData[recipePosition].title}
        </div>
        <div className="recipe-buttons"
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {(finishedCuisine||finishedDiet||finishedIntolerances) && !noRecipes && !outOfRecipes && <button
            type="button"
            className="recipe-buttons"
            onClick={this.showItems.bind(null, true)}>
            New Recipe
          </button>}
          {putInstructions && !outOfRecipes && <button
            type="button"
            className="recipe-buttons"
            onClick={this.showItemsAndSave.bind(null, true)}>
            Save Recipe
          </button>}
        </div>
        <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {typeof filteredRecipeData!= 'undefined' && typeof filteredRecipeData[0]==undefined}
        </div>
        <div
        style = {{
          display: 'flex', 
          justifyContent: 'center', 
          alignItems:'center', 
          height:'5vh'
        }}>
          {outOfRecipes && 'Sorry, we have no more recipes that match your profile specifications.'}
          {noRecipes && 'Sorry, we have no recipes that match your profile specifications.'}
          {this.state.itemsShown && (finishedCuisine||finishedIntolerances||finishedDiet) && putInstructions && !outOfRecipes && 'Click on the image to navigate to the recipe!'}
          {!(finishedCuisine||finishedDiet||finishedIntolerances) && 'Fill out the profile page first to get your customized recipes.'} 
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

  /**
   * This function takes in an array and index and filters through the array to find all keys that do not match that index
   * @param {titleValue} titleValue 
   */
  export function removeRecipe(id) { 
    savedRecipes = savedRecipes.filter((ele) => { 
      return ele.id != id; 
    });
  }

  export {Recipes, savedRecipes, recipePosition, outOfRecipes};
