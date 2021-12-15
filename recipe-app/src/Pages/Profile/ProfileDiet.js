import React, { Component } from "react";
/**
 * Most checkbox implementation comes from http://react.tips/checkboxes-in-react-16/
 */
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import './Profile.css'
import { cuisines, filteredRecipeDataCuisine, chooseCuisineData } from "./ProfileCuisine";
import { intolerances, filteredRecipeDataIntolerances, chooseIntoleranceData } from "./ProfileIntolerances";
import SpoonacularApi from "../../spoonacular";
/**
 * this import is from https://reactjsexample.com/a-customize-and-easliy-use-alert-component-for-react-js/ 
 */
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

  /**
   * This sets the state of the checkboxes on render to the state they were in when previously saved.
   */
  state = {
    checkboxes: DIET_OPTIONS.reduce(
      (options, option) => ({
        ...options,
        [option]: this.setInitialState()
      }),
      {}
    )
  };

  /**
   * This method checks to see if checkboxes have been saved to set initial state of checkboxes
   * @returns state of checkboxes
   */
  setInitialState () {
    if (!hasBeenSubmitted){
      return false;
    }
    else {
      a = a + 1;
      return checkboxStates[a-DIET_OPTIONS.length];
    }
  }

  /**
   * This method sets the state of each checkbox to isSelected.
   * @param {boolean} isSelected 
   */
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

  /**
   * This method calls selectAllCheckboxes with the parameter true to select all checkboxes.
   */
  selectAll = () => this.selectAllCheckboxes(true);

  /**
   * This method calls selectAllCheckboxes with the parameter false to select deselct all checkboxes.
   */
  deselectAll = () => this.selectAllCheckboxes(false);

  /**
   * This method handles state changes when checkboxes are selected and deselected.
   * @param {changeEvent} changeEvent 
   */
  handleCheckboxChange = (changeEvent) => {
    const { name } = changeEvent.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  /**
   * This method handles all events after the save button is clicked including sending information to the recipes page,
   * saving checkbox states, saving checkbox preferences, and calling the method to make the api call.
   * @param {formSubmitEvent} formSubmitEvent 
   */
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

  /**
   * This method creates the checkbox item
   * @param {option} option 
   * @returns Checkbox
   */
  createCheckbox = (option) => (
    <Checkbox
      label={option}
      isSelected={this.state.checkboxes[option]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option}
    />
  );

  /**
   * This method creates a checkbox for each item in the DIET_OPTIONS array.
   */
  createCheckboxes = () => DIET_OPTIONS.map(this.createCheckbox);

  /**
   * This method makes the api call after the save button has been clicked based on the selected parameters.
   */
  searchRecipes = () => {
    finishedDiet=true;
    var api = new SpoonacularApi.RecipesApi()
    var opts = {
    'diet' : diets.toString(),
    'intolerances' : intolerances.toString(),
    'cuisine' : cuisines.toString(),
    '_number' : "100"
    };
    var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } 
    else {
      filteredRecipeDataDiet = data.results;
      if (filteredRecipeDataDiet.length==0){
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
 