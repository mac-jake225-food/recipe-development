import React, { Component } from "react";
/**
 * Most checkbox implementation comes from http://react.tips/checkboxes-in-react-16/
 */
import Checkbox from "./Checkbox";
import { Link } from "react-router-dom";
import SpoonacularApi from '../../spoonacular';
import {diets, filteredRecipeDataDiet, chooseDietData} from './ProfileDiet';
import {intolerances, filteredRecipeDataIntolerances, chooseIntoleranceData} from './ProfileIntolerances';
import {alertSuccess} from './ProfileDiet'

const CUISINE_OPTIONS = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", 
"European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", 
"Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", 
"Vietnamese"];

var cuisines = []
var filteredRecipeDataCuisine=[];
var hasBeenSubmitted = false;
var checkboxStates = [];
var a = -1;
var finishedCuisine = false;
var chooseCuisineData=0;
var noRecipesCuisine = false;

class ProfileCuisine extends Component {

  /**
   * This sets the state of the checkboxes on render to the state they were in when previously saved.
   */
    state = {
      checkboxes: CUISINE_OPTIONS.reduce(
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
        return checkboxStates[a-CUISINE_OPTIONS.length];
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
    handleFormSubmit = (formSubmitEvent) => {
      formSubmitEvent.preventDefault();
      if (chooseIntoleranceData>chooseCuisineData&&chooseIntoleranceData>chooseDietData){
        chooseCuisineData = chooseIntoleranceData + 1;
      }
      else if (chooseDietData>chooseIntoleranceData&&chooseDietData>chooseCuisineData){
        chooseCuisineData = chooseDietData + 1;
      }
      else {
        chooseCuisineData = chooseCuisineData + 1;
      }
      cuisines = [];
      checkboxStates = [];
      hasBeenSubmitted = true;
      Object.keys(this.state.checkboxes)
        .forEach(checkbox => {
          if (this.state.checkboxes[checkbox]){
            cuisines.push(checkbox)
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
    createCheckbox = option => (
      <Checkbox
        label={option}
        isSelected={this.state.checkboxes[option]}
        onCheckboxChange={this.handleCheckboxChange}
        key={option}
      />
    );
  
  /**
   * This method creates a checkbox for each item in the INTOLERANCE_OPTIONS array.
   */
    createCheckboxes = () => CUISINE_OPTIONS.map(this.createCheckbox);

  /**
   * This method makes the api call after the save button has been clicked based on the selected parameters.
   */
    searchRecipes = () => {
      finishedCuisine=true;
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
        filteredRecipeDataCuisine = data.results;
        if (filteredRecipeDataCuisine.length==0){
          noRecipesCuisine = true;
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
        height: '70vh'}}>
          <div className='checkbox__items'>
            Cuisine Options
                <form onSubmit={this.handleFormSubmit}>
                  {this.createCheckboxes()}
                  <div className="buttons">
                  <button type="button" 
                    className="profile-buttons">
                    <Link to="/ProfileIntolerances"
                      className="profile-links">
                        Back
                      </Link>
                    </button>
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
                  </div>
                </form>
              </div>
            </div>
      );
    }
  }
  
export {ProfileCuisine, cuisines, filteredRecipeDataCuisine, finishedCuisine, chooseCuisineData, noRecipesCuisine};