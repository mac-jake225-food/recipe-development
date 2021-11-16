
import React, { Component } from "react";
import { filteredRecipeData } from "../Profile/ProfileCuisine";
import SpoonacularApi from "../../spoonacular";
import { Link } from "react-router-dom";
import Checkbox from "../Profile/Checkbox";

var savedRecipes = [];
var recipePosition;
var recipeID;
var recipeLink;
const CUISINE_OPTIONS = ["1"];
var cuisines = []

class Recipes extends Component{

  state = {
    checkboxes: CUISINE_OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
    ),
    itemsShown : false
  };

  showItems1 = (bool) => {
    if (filteredRecipeData!=undefined){
      recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
      console.log(recipePosition)
    }
    this.setState({
      itemsShown : bool
    });
    console.log("showItems")
  }

  showItems2 = (bool) => {
    if (filteredRecipeData!=undefined){
      savedRecipes.push(filteredRecipeData[recipePosition].title)
      console.log(savedRecipes)
      recipePosition=Math.floor(Math.random()*(filteredRecipeData.length-1));
      console.log(recipePosition)
    }
    this.setState({
      itemsShown : bool
    });
    console.log("showItems")
  }

  selectAllCheckboxes = isSelected => {
    Object.keys(this.state.checkboxes).forEach(checkbox => {
      this.setState(prevState => ({
        checkboxes: {
          ...prevState.checkboxes,
          [checkbox]: isSelected
        }
      }));
    });
  };

  selectAll = () => this.selectAllCheckboxes(true);

  deselectAll = () => this.selectAllCheckboxes(false);

  handleCheckboxChange = changeEvent => {
    const { name } = changeEvent.target;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    Object.keys(this.state.checkboxes)
      .filter(checkbox => this.state.checkboxes[checkbox])
      .forEach(checkbox => {
        cuisines.push(checkbox)
        console.log(cuisines)
      });
  };

  createCheckbox = option => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => CUISINE_OPTIONS.map(this.createCheckbox);

  getRecipeLink () {
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
        console.log(recipeLink)
      }
    };
    api.getRecipeInformation(recipeID, opts, callback);
  }

  render() {
    return (
      <div className='selector__items'
      style={{display: 'flex',  
      justifyContent:'center', 
      alignItems:'center',
      height: '70vh'}}>
        <div className='checkbox__items'>
                <div className="buttons">
                  <div>
                  <button
                    type="button"
                    className="profile-buttons"
                    onClick={this.showItems1.bind(null, true)}>
                    Generate Recipe
                  </button>
                  <button
                    type="button"
                    className="profile-buttons"
                    onClick={this.showItems2.bind(null, true)}>
                    Save Recipe
                  </button>
                  {this.state.itemsShown && typeof filteredRecipeData!=undefined && filteredRecipeData[recipePosition].title}
                  </div>
                </div>
            </div>
          </div>
    );
  }
}

export {Recipes, savedRecipes};