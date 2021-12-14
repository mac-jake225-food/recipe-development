import React, { Component } from "react";
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import './Profile.css'
import { cuisines, filteredRecipeDataCuisine, chooseCuisineData } from "./ProfileCuisine";
import { intolerances, filteredRecipeDataIntolerances, chooseIntoleranceData } from "./ProfileIntolerances";
import SpoonacularApi from "../../spoonacular";
import { AlertContainer, alert } from 'react-custom-alert';
import './index.css'; // import css file from root.

const DIET_OPTIONS = ["Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan",
"Pescetarian", "Paleo", "Primal", "Low FODMAP", "Whole30"]

export const alertSuccess = () => alert({ message: 'Saved', type: 'success' });

var diets = []
var hasBeenSubmitted = false;
var checkboxStates = [];
var a = -1;
var finishedDiet = false;
var filteredRecipeDataDiet=[];
var chooseDietData=0;
var noRecipesDiet = false;

class ProfileDiet extends Component {

  state = {
    checkboxes: DIET_OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: this.setInitialState()
      }),
      {}
    )
  };

  setInitialState () {
    if (!hasBeenSubmitted){
      return false;
    }
    else {
      // console.log(checkboxStates[a-DIET_OPTIONS.length])
      a = a + 1;
      // console.log(a)
      return checkboxStates[a-DIET_OPTIONS.length];
    }
  }

  selectAllCheckboxes = (isSelected) => {
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

  handleCheckboxChange = (changeEvent) => {
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
      if (chooseIntoleranceData>chooseCuisineData&&chooseIntoleranceData>chooseDietData){
        chooseDietData = chooseIntoleranceData + 1;
      }
      else if (chooseCuisineData>chooseIntoleranceData&&chooseCuisineData>chooseDietData){
        chooseDietData = chooseCuisineData + 1;
      }
      else {
        chooseDietData = chooseDietData + 1;
      }
    console.log(chooseDietData)
    diets = [];
    checkboxStates = [];
    hasBeenSubmitted = true;
    Object.keys(this.state.checkboxes)
      .forEach(checkbox => {
        if (this.state.checkboxes[checkbox]){
          diets.push(checkbox)
        }
        checkboxStates.push(this.state.checkboxes[checkbox])
      });
      this.searchRecipes()
  };

  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  createCheckboxes = () => DIET_OPTIONS.map(this.createCheckbox);

  searchRecipes = () => {
    finishedDiet=true;
    var api = new SpoonacularApi.RecipesApi()
    var opts = {
    'diet' : diets.toString(),
    'intolerances' : intolerances.toString(),
    'cuisine' : cuisines.toString(),
    '_number' : "100"
    };
    console.log("showing user choices: ",opts)
    var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } 
    else {
      console.log('API called successfully. Returned data: ', data.results);
      filteredRecipeDataDiet = data.results;
      if (filteredRecipeDataCuisine.length==0){
        noRecipesDiet = true;
      }
    }
  };
  api.searchRecipes(opts, callback);
  }

  render() {
    a = -1;
    return (
      <div className='selector__items'
      style={{display: 'flex',  
      justifyContent:'center', 
      alignItems:'center',
      height: '60vh'}}>
        <div className='checkbox__items'>
          Diet Options
              <form onSubmit={this.handleFormSubmit}>
                {this.createCheckboxes()}
                <div className="buttons">
                  <button
                    type="button"
                    className="profile-buttons"
                    onClick={this.selectAll}>
                    Select All
                  </button>
                  <button
                    type="button"
                    className="profile-buttons"
                    onClick={this.deselectAll}>
                    Deselect All
                  </button>
                  
                  <button type="submit" 
                  className="profile-buttons" onClick={alertSuccess}>
                  Save
                  </button>

                  <button type="button" 
                  className="profile-buttons">
                  <Link to="/ProfileIntolerances"
                    className="profile-links">
                      Next
                    </Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
    );
  }
}
export {ProfileDiet, diets, finishedDiet, filteredRecipeDataDiet, chooseDietData, noRecipesDiet};
 